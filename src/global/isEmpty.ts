export { };

declare global {
    /**
     * Checks if the given value is empty.
     * - For `null` or `undefined`, returns `true`.
     * - For strings, arrays, or array-like objects, returns `true` if length is 0.
     * - For objects, returns `true` if it has no own enumerable properties.
     *
     * @param value - The value to check.
     * @returns `true` if the value is empty, otherwise `false`.
     *
     * @example
     * ```ts
     * isEmpty(null); // true
     * isEmpty(undefined); // true
     * isEmpty(''); // true
     * isEmpty([]); // true
     * isEmpty({}); // true
     * isEmpty(0); // false
     * isEmpty('hello'); // false
     * isEmpty([1, 2, 3]); // false
     * isEmpty({ a: 1 }); // false
     * ```
     */
    function isEmpty(value: any): boolean;
}

if (!('isEmpty' in globalThis)) {
    Object.defineProperty(globalThis, 'isEmpty', {
        value: function (value: any): boolean {
            if (value == null) return true; // null or undefined
            if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
            if (typeof value === 'object') return Object.keys(value).length === 0;
            return false;
        },
        writable: true,
        configurable: true,
    });
}