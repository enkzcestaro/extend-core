export { };

declare global {
    /**
     * Checks if the given value is a boolean.
     *
     * @param value - The value to check.
     * @returns `true` if the value is a boolean, otherwise `false`.
     *
     * @example
     * ```ts
     * isBoolean(true); // true
     * isBoolean(false); // true
     * isBoolean(0); // false
     * isBoolean('true'); // false
     * ```
     */
    function isBoolean(value: any): value is boolean;
}

if (!('isBoolean' in globalThis)) {
    Object.defineProperty(globalThis, 'isBoolean', {
        value: function (value: any): value is boolean {
            return typeof value === 'boolean' || value instanceof Boolean;
        },
        writable: true,
        configurable: true,
    });
};