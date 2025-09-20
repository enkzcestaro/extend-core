export {};

declare global {
    interface ObjectConstructor {
        /**
         * Deep equality check between two objects.
         * 
         * @param a First object
         * @param b Second object
         * @returns True if objects are deeply equal, false otherwise
         * 
         * @example
         * Object.isEqual({ a: 1 }, { a: 1 }); // true
         * Object.isEqual({ a: 1 }, { a: 2 }); // false
         */
        isEqual(a: Record<string, any>, b: Record<string, any>): boolean;
    }
}

if (!('isEqual' in Object.prototype)) {
    Object.defineProperty(Object, 'isEqual', {
        value: function (a: Record<string, any>, b: Record<string, any>): boolean {
            const isObject = (obj: any) => obj && typeof obj === 'object';
            const compare = (x: any, y: any): boolean => {
                if (!isObject(x) || !isObject(y)) return x === y;
                const xKeys = Object.keys(x);
                const yKeys = Object.keys(y);
                if (xKeys.length !== yKeys.length) return false;
                return xKeys.every(key => compare(x[key], y[key]));
            };
            return compare(a, b);
        },
        writable: true,
        configurable: true,
    });
}