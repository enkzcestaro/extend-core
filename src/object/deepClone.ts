export {};

declare global {
    interface ObjectConstructor {
        /**
         * Creates a deep clone of an object.
         * 
         * @param obj Object to clone
         * @returns New object deeply cloned
         * 
         * @example
         * Object.deepClone({ a: { b: 1 } }); // { a: { b:1 } } (new nested object)
         */
        deepClone(obj: Record<string, any>): Record<string, any>;
    }
}

if (!('deepClone' in Object.prototype)) {
    Object.defineProperty(Object, 'deepClone', {
        value: function (obj: Record<string, any>): Record<string, any> {
            return JSON.parse(JSON.stringify(obj));
        },
        writable: true,
        configurable: true,
    });
}