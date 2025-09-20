export {};

declare global {
    interface ObjectConstructor {
        /**
         * Checks if object has all keys in the array.
         * 
         * @param obj Object to check
         * @param keys Array of keys
         * @returns True if all keys exist, false otherwise
         * 
         * @example
         * Object.hasKeys({ a: 1, b: 2 }, ['a','b']); // true
         * Object.hasKeys({ a: 1 }, ['a','b']); // false
         */
        hasKeys(obj: Record<string, any>, keys: string[]): boolean;
    }
}

if (!('hasKeys' in Object.prototype)) {
    Object.defineProperty(Object, 'hasKeys', {
        value: function (obj: Record<string, any>, keys: string[]): boolean {
            return keys.every(key => Object.prototype.hasOwnProperty.call(obj, key));
        },
        writable: true,
        configurable: true,
    });
}