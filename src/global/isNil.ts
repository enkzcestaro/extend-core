export { };

declare global {
    /**
     * Checks if the given value is `null` or `undefined`.
     *
     * @param value - The value to check.
     * @returns `true` if the value is `null` or `undefined`, otherwise `false`.
     *
     * @example
     * ```ts
     * isNil(null); // true
     * isNil(undefined); // true
     * isNil(0); // false
     * isNil(''); // false
     * ```
     */
    function isNil(value: any): value is null | undefined;
};

if (!('isNil' in globalThis)) {
    Object.defineProperty(globalThis, 'isNil', {
        value: function (value: any): value is null | undefined {
            return value === null || value === undefined;
        },
        writable: true,
        configurable: true,
    });
};