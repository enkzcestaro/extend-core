export {};

declare global {
    interface ObjectConstructor {
        /**
         * Shallow equality check between two objects (top-level keys only).
         * 
         * @param a First object
         * @param b Second object
         * @returns True if top-level keys and values are equal, false otherwise
         * 
         * @example
         * Object.isShallowEqual({ a: 1 }, { a: 1 }); // true
         * Object.isShallowEqual({ a: 1 }, { a: 2 }); // false
         */
        isShallowEqual(a: Record<string, any>, b: Record<string, any>): boolean;
    }
}

if (!('isShallowEqual' in Object.prototype)) {
    Object.defineProperty(Object, 'isShallowEqual', {
        value: function (a: Record<string, any>, b: Record<string, any>): boolean {
            const aKeys = Object.keys(a);
            const bKeys = Object.keys(b);
            if (aKeys.length !== bKeys.length) return false;
            return aKeys.every(key => a[key] === b[key]);
        },
        writable: true,
        configurable: true,
    });
}