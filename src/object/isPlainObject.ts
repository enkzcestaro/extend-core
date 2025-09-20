export {};

declare global {
    interface ObjectConstructor {
        /**
         * Checks if an object is a plain object ({} or new Object()).
         * 
         * @param obj Object to check
         * @returns True if plain object, false otherwise
         * 
         * @example
         * Object.isPlainObject({}); // true
         * Object.isPlainObject(new Date()); // false
         */
        isPlainObject(obj: any): boolean;
    }
}

if (!('isPlainObject' in Object.prototype)) {
    Object.defineProperty(Object, 'isPlainObject', {
        value: function (obj: any): boolean {
            if (typeof obj !== 'object' || obj === null) return false;
            let proto = obj;
            while (Object.getPrototypeOf(proto) !== null) {
                proto = Object.getPrototypeOf(proto);
            }
            return Object.getPrototypeOf(obj) === proto;
        },
        writable: true,
        configurable: true,
    });
}