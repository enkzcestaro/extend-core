export {};

declare global {
    interface ObjectConstructor {
        /**
         * Rejects entries from an object based on a predicate function.
         * 
         * @param obj Object to filter
         * @param fn Predicate function (value, key) => boolean
         * @returns New object without entries that match the predicate
         * 
         * @example
         * Object.reject({ a:1, b:2 }, v => v > 1); // { a:1 }
         */
        reject(obj: Record<string, any>, fn: (value: any, key: string) => boolean): Record<string, any>;
    }
}

if (!('reject' in Object.prototype)) {
    Object.defineProperty(Object, 'reject', {
        value: function (obj: Record<string, any>, fn: (value: any, key: string) => boolean): Record<string, any> {
            const result: Record<string, any> = {};
            for (const [key, value] of Object.entries(obj)) {
                if (!fn(value, key)) result[key] = value;
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}