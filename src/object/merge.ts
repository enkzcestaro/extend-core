export {};

declare global {
    interface ObjectConstructor {
        /**
         * Deep merges two objects.
         * 
         * @param target Target object
         * @param source Source object
         * @returns New object with deeply merged properties
         * 
         * @example
         * Object.merge({ a: { x: 1 } }, { a: { y: 2 } }); // { a: { x:1, y:2 } }
         */
        merge(target: Record<string, any>, source: Record<string, any>): Record<string, any>;
    }
}

if (!('merge' in Object.prototype)) {
    Object.defineProperty(Object, 'merge', {
        value: function (target: Record<string, any>, source: Record<string, any>): Record<string, any> {
            const result = { ...target };
            for (const key in source) {
                if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                    result[key] = Object.merge(result[key] || {}, source[key]);
                } else {
                    result[key] = source[key];
                }
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}