export { };

declare global {
    /**
     * Checks if the given value is a Promise.
     *
     * @param value - The value to check.
     * @returns `true` if the value is a Promise, otherwise `false`.
     *
     * @example
     * ```ts
     * isPromise(Promise.resolve()); // true
     * isPromise({ then: () => {}, catch: () => {} }); // true
     * isPromise(123); // false
     * ```
     */
    function isPromise(value: any): value is Promise<any>;
}

if (!('isPromise' in globalThis)) {
    Object.defineProperty(globalThis, 'isPromise', {
        value: function (value: any): value is Promise<any> {
            return value instanceof Promise || (value !== null && typeof value === 'object' && typeof value.then === 'function' && typeof value.catch === 'function');
        },
        writable: true,
        configurable: true,
    });
};