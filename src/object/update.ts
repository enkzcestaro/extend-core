export {};

declare global {
    interface ObjectConstructor {
        /**
         * Updates a nested path in an object with a function.
         * 
         * @param obj Object to update
         * @param path Dot-separated path string (e.g., 'a.b.c')
         * @param fn Function to apply to the value
         * @returns Updated object
         * 
         * @example
         * Object.update({ a: { b: 1 } }, 'a.b', v => v + 1); // { a: { b:2 } }
         */
        update(obj: Record<string, any>, path: string, fn: (value: any) => any): Record<string, any>;
    }
}

if (!('update' in Object.prototype)) {
    Object.defineProperty(Object, 'update', {
        value: function (obj: Record<string, any>, path: string, fn: (value: any) => any): Record<string, any> {
            const keys = path.split('.');
            let current: any = obj;
            for (let i = 0; i < keys.length - 1; i++) {
                if (!(keys[i] in current)) current[keys[i]] = {};
                current = current[keys[i]];
            }
            const lastKey = keys[keys.length - 1];
            current[lastKey] = fn(current[lastKey]);
            return obj;
        },
        writable: true,
        configurable: true,
    });
}