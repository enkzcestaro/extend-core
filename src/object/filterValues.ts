export {};

declare global {
    interface ObjectConstructor {
        /**
         * Filters object values using a predicate function.
         * 
         * @param obj Object to filter
         * @param fn Predicate function (value, key) => boolean
         * @returns New object with values that pass the predicate
         * 
         * @example
         * Object.filterValues({ a:1, b:2, c:3 }, v => v > 1); // { b:2, c:3 }
         */
        filterValues(obj: Record<string, any>, fn: (value: any, key: string) => boolean): Record<string, any>;
    }
}

if (!('filterValues' in Object.prototype)) {
    Object.defineProperty(Object, 'filterValues', {
        value: function (obj: Record<string, any>, fn: (value: any, key: string) => boolean): Record<string, any> {
            const result: Record<string, any> = {};
            for (const [key, value] of Object.entries(obj)) {
                if (fn(value, key)) result[key] = value;
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}