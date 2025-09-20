export {};

declare global {
    interface ObjectConstructor {
        /**
         * Gets the value at a nested path in an object, with optional default.
         * 
         * @param obj Object to query
         * @param path Dot-separated path string (e.g., 'a.b.c')
         * @param defaultValue Value to return if path is undefined
         * @returns Value at path or defaultValue
         * 
         * @example
         * Object.get({ a: { b: 2 } }, 'a.b'); // 2
         * Object.get({ a: { b: 2 } }, 'a.c', 0); // 0
         */
        get(obj: Record<string, any>, path: string, defaultValue?: any): any;
    }
}

if (!('get' in Object.prototype)) {
    Object.defineProperty(Object, 'get', {
        value: function (obj: Record<string, any>, path: string, defaultValue?: any): any {
            const keys = path.split('.');
            let current: any = obj;
            for (const key of keys) {
                if (current == null || !(key in current)) return defaultValue;
                current = current[key];
            }
            return current;
        },
        writable: true,
        configurable: true,
    });
}