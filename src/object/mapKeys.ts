export {};

declare global {
    interface ObjectConstructor {
        /**
         * Maps each key with a function.
         * 
         * @param obj Object to map
         * @param fn Function to apply to each key (key, value) => newKey
         * @returns New object with mapped keys
         * 
         * @example
         * Object.mapKeys({ a: 1, b: 2 }, k => k.toUpperCase()); // { A: 1, B: 2 }
         */
        mapKeys(obj: Record<string, any>, fn: (key: string, value: any) => string): Record<string, any>;
    }
}

if (!('mapKeys' in Object.prototype)) {
    Object.defineProperty(Object, 'mapKeys', {
        value: function (obj: Record<string, any>, fn: (key: string, value: any) => string): Record<string, any> {
            const result: Record<string, any> = {};
            for (const [key, value] of Object.entries(obj)) {
                result[fn(key, value)] = value;
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}