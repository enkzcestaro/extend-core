export {};

declare global {
    interface ObjectConstructor {
        /**
         * Checks if at least one entry in the object satisfies the predicate.
         * 
         * @param obj Object to check
         * @param fn Predicate function (value, key) => boolean
         * @returns True if any entry satisfies the predicate, false otherwise
         * 
         * @example
         * Object.some({ a: 1, b: 2 }, v => v > 1); // true
         * Object.some({ a: 1, b: 2 }, v => v > 2); // false
         */
        some(obj: Record<string, any>, fn: (value: any, key: string) => boolean): boolean;
    }
}

if (!('some' in Object.prototype)) {
    Object.defineProperty(Object, 'some', {
        value: function (obj: Record<string, any>, fn: (value: any, key: string) => boolean): boolean {
            for (const [key, value] of Object.entries(obj)) {
                if (fn(value, key)) return true;
            }
            return false;
        },
        writable: true,
        configurable: true,
    });
}