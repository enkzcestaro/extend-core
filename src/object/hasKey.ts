export {};

declare global {
    interface ObjectConstructor {
        /**
         * Checks if object has a specific key.
         * 
         * @param obj Object to check
         * @param key Key to look for
         * @returns True if the object has the key, false otherwise
         * 
         * @example
         * Object.hasKey({ a: 1 }, 'a'); // true
         * Object.hasKey({ a: 1 }, 'b'); // false
         */
        hasKey(obj: Record<string, any>, key: string): boolean;
    }
}

if (!('hasKey' in Object.prototype)) {
    Object.defineProperty(Object, 'hasKey', {
        value: function (obj: Record<string, any>, key: string): boolean {
            return Object.prototype.hasOwnProperty.call(obj, key);
        },
        writable: true,
        configurable: true,
    });
}