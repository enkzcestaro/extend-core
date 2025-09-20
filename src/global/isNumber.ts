export { };

declare global {
    /**
     * Checks if the given value is a number.
     *
     * @param value - The value to check.
     * @returns `true` if the value is a number, otherwise `false`.
     *
     * @example
     * ```ts
     * isNumber(123); // true
     * isNumber('hello'); // false
     * isNumber(NaN); // false
     * ```
     */
    function isNumber(value: any): value is number;
}

if (!('isNumber' in globalThis)) {
    Object.defineProperty(globalThis, 'isNumber', {
        value: function (value: any): value is number {
            return typeof value === 'number' && !isNaN(value);
        },
        writable: true,
        configurable: true,
    });
};


