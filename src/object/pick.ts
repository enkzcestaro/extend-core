export {};

declare global {
    interface ObjectConstructor {
        /**
         * Picks only the specified keys from an object.
         * 
         * @param obj The source object
         * @param keys Array of keys to pick
         * @returns New object with only picked keys
         * 
         * @example
         * Object.pick({ a: 1, b: 2, c: 3 }, ['a','c']); // { a: 1, c: 3 }
         */
        pick(obj: Record<string, any>, keys: string[]): Record<string, any>;
    }
}

if (!('pick' in Object.prototype)) {
    Object.defineProperty(Object, 'pick', {
        value: function (obj: Record<string, any>, keys: string[]): Record<string, any> {
            const result: Record<string, any> = {};
            for (const key of keys) {
                if (key in obj) result[key] = obj[key];
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}