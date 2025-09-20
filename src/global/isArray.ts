export { };

declare global {
    /**
     * Checks if the given value is an array.
     *
     * @param value - The value to check.
     * @returns `true` if the value is an array, otherwise `false`.
     *
     * @example
     * ```ts
     * isArray([1, 2, 3]); // true
     * isArray('hello'); // false
     * isArray({}); // false
     * ```
     */
    function isArray(value: any): value is any[];
}

if (!('isArray' in globalThis)) {
    Object.defineProperty(globalThis, 'isArray', {
        value: function (value: any): value is any[] {
            return Array.isArray(value);
        },
        writable: true,
        configurable: true,
    });
}