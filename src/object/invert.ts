export {};

declare global {
    interface ObjectConstructor {
        /**
         * Inverts keys and values of the object.
         * 
         * @param obj Object to invert
         * @returns New object with keys and values swapped
         * 
         * @example
         * Object.invert({ a: 'x', b: 'y' }); // { x: 'a', y: 'b' }
         */
        invert(obj: Record<string, any>): Record<string, any>;
    }
}

if (!('invert' in Object.prototype)) {
    Object.defineProperty(Object, 'invert', {
        value: function (obj: Record<string, any>): Record<string, any> {
            const result: Record<string, any> = {};
            for (const [key, value] of Object.entries(obj)) {
                result[value] = key;
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}