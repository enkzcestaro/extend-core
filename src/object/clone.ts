export {};

declare global {
    interface ObjectConstructor {
        /**
         * Creates a shallow clone of an object.
         * 
         * @param obj Object to clone
         * @returns New object with same top-level properties
         * 
         * @example
         * Object.clone({ a: 1, b: 2 }); // { a: 1, b: 2 }
         */
        clone(obj: Record<string, any>): Record<string, any>;
    }
}

if (!('clone' in Object.prototype)) {
    Object.defineProperty(Object, 'clone', {
        value: function (obj: Record<string, any>): Record<string, any> {
            return { ...obj };
        },
        writable: true,
        configurable: true,
    });
}