export { };

declare global {
    /**
     * Checks if the given value is a string.
     *
     * @param value - The value to check.
     * @returns `true` if the value is a string, otherwise `false`.
     *
     * @example
     * ```ts
     * isString('hello'); // true
     * isString(123); // false
     * isString({}); // false
     * ```
     */
    function isString(value: any): value is string;  
};

if (!('isString' in globalThis)) {
    Object.defineProperty(globalThis, 'isString', {
        value: function (value: any): value is string {
            return typeof value === 'string' || value instanceof String;
        },
        writable: true,
        configurable: true,
    });
};

