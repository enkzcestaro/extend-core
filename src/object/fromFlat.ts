export {};

declare global {
    interface ObjectConstructor {
        /**
         * Converts a flat object with separator notation to a nested object.
         * 
         * @param obj Flat object
         * @param separator Separator string (default '.')
         * @returns Nested object
         * 
         * @example
         * Object.fromFlat({ 'a.b': 1 }); // { a: { b: 1 } }
         */
        fromFlat(obj: Record<string, any>, separator?: string): Record<string, any>;
    }
}

if (!('fromFlat' in Object.prototype)) {
    Object.defineProperty(Object, 'fromFlat', {
        value: function (obj: Record<string, any>, separator = '.'): Record<string, any> {
            const result: Record<string, any> = {};
            for (const flatKey in obj) {
                const keys = flatKey.split(separator);
                let current: any = result;
                keys.forEach((key, i) => {
                    if (i === keys.length - 1) current[key] = obj[flatKey];
                    else if (!(key in current) || typeof current[key] !== 'object') current[key] = {};
                    current = current[key];
                });
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}