export {};

declare global {
    interface ObjectConstructor {
        /**
         * Checks if all keys are empty or falsy.
         * 
         * @param obj The object to check
         * @returns True if all keys are empty or falsy, false otherwise
         * 
         * @example
         * Object.isEmpty({ a: 0, b: '', c: null }); // true
         * Object.isEmpty({ a: 2, b: '', c: null }); // false
         */
        isEmpty(obj: Record<string, any>): boolean;
    }
}

if (!('isEmpty' in Object.prototype)) {
    Object.defineProperty(Object, 'isEmpty', {
        value: function (obj: Record<string, any>): boolean {
            return Object.values(obj).every(v => !v);
        },
        writable: true,
        configurable: true,
    });
}
