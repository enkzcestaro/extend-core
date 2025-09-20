export {};

declare global {
    interface ObjectConstructor {
        /**
         * Maps each value with a function.
         * 
         * @param obj Object to map
         * @param fn Function to apply to each value (value, key) => newValue
         * @returns New object with mapped values
         * 
         * @example
         * Object.mapValues({ a: 1, b: 2 }, v => v * 2); // { a: 2, b: 4 }
         */
        mapValues(obj: Record<string, any>, fn: (value: any, key: string) => any): Record<string, any>;
    }
}

if (!('mapValues' in Object.prototype)) {
    Object.defineProperty(Object, 'mapValues', {
        value: function (obj: Record<string, any>, fn: (value: any, key: string) => any): Record<string, any> {
            const result: Record<string, any> = {};
            for (const [key, value] of Object.entries(obj)) {
                result[key] = fn(value, key);
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}