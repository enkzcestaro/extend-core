export {};

declare global {
    interface ObjectConstructor {
        /**
         * Flattens a nested object using a separator.
         * 
         * @param obj Object to flatten
         * @param separator Separator string (default '.')
         * @returns Flattened object
         * 
         * @example
         * Object.toFlat({ a: { b: 1 } }); // { 'a.b': 1 }
         */
        toFlat(obj: Record<string, any>, separator?: string): Record<string, any>;
    }
}

if (!('toFlat' in Object.prototype)) {
    Object.defineProperty(Object, 'toFlat', {
        value: function (obj: Record<string, any>, separator = '.'): Record<string, any> {
            const result: Record<string, any> = {};
            function recurse(curr: any, prefix = '') {
                for (const key in curr) {
                    const value = curr[key];
                    const newKey = prefix ? `${prefix}${separator}${key}` : key;
                    if (value && typeof value === 'object' && !Array.isArray(value)) {
                        recurse(value, newKey);
                    } else {
                        result[newKey] = value;
                    }
                }
            }
            recurse(obj);
            return result;
        },
        writable: true,
        configurable: true,
    });
}