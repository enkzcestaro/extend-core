export { };

declare global {
    /**
     * Checks if the given value is a valid Date object.
     *
     * @param value - The value to check.
     * @returns `true` if the value is a valid Date object, otherwise `false`.
     *
     * @example
     * ```ts
     * isDate(new Date()); // true
     * isDate('2023-01-01'); // false
     * isDate({}); // false
     * ```
     */
    function isDate(value: any): value is Date;
}

if (!('isDate' in globalThis)) {
    Object.defineProperty(globalThis, 'isDate', {
        value: function (value: any): value is Date {
            return value instanceof Date && !isNaN(value.getTime());
        },
        writable: true,
        configurable: true,
    });
};


