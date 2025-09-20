export {};

declare global {
    interface ObjectConstructor {
        /**
         * Sets a value at a nested path only if undefined.
         * 
         * @param obj Object to modify
         * @param path Dot-separated path string
         * @param value Value to set
         * @returns Modified object
         * 
         * @example
         * Object.setIfUndefined({ a: {} }, 'a.b', 10); // { a: { b: 10 } }
         */
        setIfUndefined(obj: Record<string, any>, path: string, value: any): Record<string, any>;
    }
}

if (!('setIfUndefined' in Object.prototype)) {
    Object.defineProperty(Object, 'setIfUndefined', {
        value: function (obj: Record<string, any>, path: string, value: any): Record<string, any> {
            const keys = path.split('.');
            let current: any = obj;
            for (let i = 0; i < keys.length - 1; i++) {
                if (!(keys[i] in current) || typeof current[keys[i]] !== 'object') current[keys[i]] = {};
                current = current[keys[i]];
            }
            const lastKey = keys[keys.length - 1];
            if (current[lastKey] === undefined) current[lastKey] = value;
            return obj;
        },
        writable: true,
        configurable: true,
    });
}