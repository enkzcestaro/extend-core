export {};

declare global {
    interface ObjectConstructor {
        /**
         * Checks if object has a specific value.
         * 
         * @param obj Object to check
         * @param value Value to look for
         * @returns True if value exists in the object, false otherwise
         * 
         * @example
         * Object.hasValue({ a: 1, b: 2 }, 2); // true
         * Object.hasValue({ a: 1, b: 2 }, 3); // false
         */
        hasValue(obj: Record<string, any>, value: any): boolean;
    }
}

if (!('hasValue' in Object.prototype)) {
    Object.defineProperty(Object, 'hasValue', {
        value: function (obj: Record<string, any>, value: any): boolean {
            return Object.values(obj).includes(value);
        },
        writable: true,
        configurable: true,
    });
}