export {};

declare global {
    interface ObjectConstructor {
        /**
         * Deletes a nested key from an object using dot notation.
         * 
         * @param obj Object to modify
         * @param path Dot-separated path string (e.g., 'a.b.c')
         * @returns Modified object
         * 
         * @example
         * Object.unset({ a: { b: 2 } }, 'a.b'); // { a: {} }
         */
        unset(obj: Record<string, any>, path: string): Record<string, any>;
    }
}

if (!('unset' in Object.prototype)) {
    Object.defineProperty(Object, 'unset', {
        value: function (obj: Record<string, any>, path: string): Record<string, any> {
            const keys = path.split('.');
            let current: any = obj;
            for (let i = 0; i < keys.length - 1; i++) {
                if (!(keys[i] in current)) return obj;
                current = current[keys[i]];
            }
            delete current[keys[keys.length - 1]];
            return obj;
        },
        writable: true,
        configurable: true,
    });
}