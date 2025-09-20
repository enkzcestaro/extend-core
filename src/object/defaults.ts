export {};

declare global {
    interface ObjectConstructor {
        /**
         * Fills missing keys with default values.
         * 
         * @param obj Target object
         * @param defaultsObj Default values
         * @returns New object with defaults applied
         * 
         * @example
         * Object.defaults({ a:1 }, { a:0, b:2 }); // { a:1, b:2 }
         */
        defaults(obj: Record<string, any>, defaultsObj: Record<string, any>): Record<string, any>;
    }
}

if (!('defaults' in Object.prototype)) {
    Object.defineProperty(Object, 'defaults', {
        value: function (obj: Record<string, any>, defaultsObj: Record<string, any>): Record<string, any> {
            return { ...defaultsObj, ...obj };
        },
        writable: true,
        configurable: true,
    });
}