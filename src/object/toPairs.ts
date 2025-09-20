export {};

declare global {
    interface ObjectConstructor {
        /**
         * Converts object to array of key-value pairs.
         * 
         * @param obj Object to convert
         * @returns Array of [key, value] pairs
         * 
         * @example
         * Object.toPairs({ a: 1, b: 2 }); // [['a',1], ['b',2]]
         */
        toPairs(obj: Record<string, any>): [string, any][];
    }
}

if (!('toPairs' in Object.prototype)) {
    Object.defineProperty(Object, 'toPairs', {
        value: function (obj: Record<string, any>): [string, any][] {
            return Object.entries(obj);
        },
        writable: true,
        configurable: true,
    });
}