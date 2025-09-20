export {};

declare global {
    interface ObjectConstructor {
        /**
         * Returns the number of own keys in the object.
         * 
         * @param obj Object to measure
         * @returns Number of keys
         * 
         * @example
         * Object.size({ a:1, b:2 }); // 2
         */
        size(obj: Record<string, any>): number;
    }
}

if (!('size' in Object.prototype)) {
    Object.defineProperty(Object, 'size', {
        value: function (obj: Record<string, any>): number {
            return Object.keys(obj).length;
        },
        writable: true,
        configurable: true,
    });
}