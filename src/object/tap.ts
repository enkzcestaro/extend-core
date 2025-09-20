export {};

declare global {
    interface ObjectConstructor {
        /**
         * Performs a side-effect function on the object and returns it (chainable).
         * 
         * @param obj Object to tap
         * @param fn Function to execute
         * @returns Original object
         * 
         * @example
         * Object.tap({ a:1 }, o => console.log(o)); // { a:1 }
         */
        tap<T extends Record<string, any>>(obj: T, fn: (obj: T) => void): T;
    }
}

if (!('tap' in Object.prototype)) {
    Object.defineProperty(Object, 'tap', {
        value: function <T extends Record<string, any>>(obj: T, fn: (obj: T) => void): T {
            fn(obj);
            return obj;
        },
        writable: true,
        configurable: true,
    });
}