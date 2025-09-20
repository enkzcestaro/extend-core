export {};

declare global {
    interface ObjectConstructor {
        /**
         * Checks if all entries in the object satisfy the predicate.
         * 
         * @param obj Object to check
         * @param fn Predicate function (value, key) => boolean
         * @returns True if all entries satisfy the predicate, false otherwise
         * 
         * @example
         * Object.every({ a: 1, b: 2 }, v => v > 0); // true
         * Object.every({ a: 1, b: 2 }, v => v > 1); // false
         */
        every(obj: Record<string, any>, fn: (value: any, key: string) => boolean): boolean;
    }
}

if (!('every' in Object.prototype)) {
    Object.defineProperty(Object, 'every', {
        value: function (obj: Record<string, any>, fn: (value: any, key: string) => boolean): boolean {
            for (const [key, value] of Object.entries(obj)) {
                if (!fn(value, key)) return false;
            }
            return true;
        },
        writable: true,
        configurable: true,
    });
}