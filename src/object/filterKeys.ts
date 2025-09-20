export {};

declare global {
    interface ObjectConstructor {
        /**
         * Filters object keys using a predicate function.
         * 
         * @param obj Object to filter
         * @param fn Predicate function (key, value) => boolean
         * @returns New object with keys that pass the predicate
         * 
         * @example
         * Object.filterKeys({ a:1, b:2, c:3 }, k => k !== 'b'); // { a:1, c:3 }
         */
        filterKeys(obj: Record<string, any>, fn: (key: string, value: any) => boolean): Record<string, any>;
    }
}

if (!('filterKeys' in Object.prototype)) {
    Object.defineProperty(Object, 'filterKeys', {
        value: function (obj: Record<string, any>, fn: (key: string, value: any) => boolean): Record<string, any> {
            const result: Record<string, any> = {};
            for (const [key, value] of Object.entries(obj)) {
                if (fn(key, value)) result[key] = value;
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}