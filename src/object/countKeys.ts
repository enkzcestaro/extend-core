export {};

declare global {
    interface ObjectConstructor {
        /**
         * Counts how many keys exist in an object.
         * 
         * @param obj Object to count
         * @returns Number of keys
         * 
         * @example
         * Object.countKeys({ a:1, b:2 }); // 2
         */
        countKeys(obj: Record<string, any>): number;
    }
}

if (!('countKeys' in Object.prototype)) {
    Object.defineProperty(Object, 'countKeys', {
        value: function (obj: Record<string, any>): number {
            return Object.keys(obj).length;
        },
        writable: true,
        configurable: true,
    });
}
