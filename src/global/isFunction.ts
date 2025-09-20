export { };

declare global {
    /**
     * Checks if the given value is a function.
     *
     * @param value - The value to check.
     * @returns `true` if the value is a function, otherwise `false`.
     *
     * @example
     * ```ts
     * isFunction(function() {}); // true
     * isFunction(() => {}); // true
     * isFunction(class {}); // true
     * isFunction(123); // false
     * isFunction('hello'); // false
     * ```
     */
    function isFunction(value: any): value is Function;
}

if (!('isFunction' in globalThis)) {
    Object.defineProperty(globalThis, 'isFunction', {
        value: function (value: any): value is Function {
            return typeof value === 'function';
        },
        writable: true,
        configurable: true,
    });
};