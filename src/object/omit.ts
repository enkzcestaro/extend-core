export {};

declare global {
    interface ObjectConstructor {
        /**
         * Omits the specified keys from an object.
         * 
         * @param obj The source object
         * @param keys Array of keys to omit
         * @returns New object without the omitted keys
         * 
         * @example
         * Object.omit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
         */
        omit(obj: Record<string, any>, keys: string[]): Record<string, any>;
    }
}

if (!('omit' in Object.prototype)) {
    Object.defineProperty(Object, 'omit', {
        value: function (obj: Record<string, any>, keys: string[]): Record<string, any> {
            const result: Record<string, any> = { ...obj };
            for (const key of keys) {
                delete result[key];
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}