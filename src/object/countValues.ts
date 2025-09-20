export {};

declare global {
    interface ObjectConstructor {
        /**
         * Counts how many values exist in an object.
         * 
         * @param obj Object to count
         * @returns Number of values
         * 
         * @example
         * Object.countValues({ a:1, b:2 }); // 2
         */
        countValues(obj: Record<string, any>): number;
    }
}

if (!('countValues' in Object.prototype)) {
    Object.defineProperty(Object, 'countValues', {
        value: function (obj: Record<string, any>): number {
            return Object.values(obj).length;
        },
        writable: true,
        configurable: true,
    });
}