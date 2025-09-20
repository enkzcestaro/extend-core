export { };

declare global {
    /**
     * Checks if the given value is `undefined`.
     *
     * @param value - The value to check.
     * @returns `true` if the value is `undefined`, otherwise `false`.
     *
     * @example
     * ```ts
     * isUndefined(undefined); // true
     * isUndefined(null); // false
     * isUndefined(0); // false
     * ```
     */
    function isUndefined(value: any): value is undefined;  
};

if (!('isUndefined' in globalThis)) {
    Object.defineProperty(globalThis, 'isUndefined', {
        value: function (value: any): value is undefined {
            return value === undefined;
        },
        writable: true,
        configurable: true,
    });
};