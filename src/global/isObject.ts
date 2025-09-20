export { };

declare global {
    /**
     * Checks if the given value is an object (and not null).
     *
     * @param value - The value to check.
     * @returns `true` if the value is a non-null object, otherwise `false`.
     *
     * @example
     * ```ts
     * isObject({}); // true
     * isObject([]); // true
     * isObject(null); // false
     * isObject(123); // false
     * ```
     */
    function isObject(value: any): value is object;
}

if (!('isObject' in globalThis)) {
    Object.defineProperty(globalThis, 'isObject', {
        value: function (value: any): value is object {
            return value !== null && (typeof value === 'object' || typeof value === 'function');
        },
        writable: true,
        configurable: true,
    });
};