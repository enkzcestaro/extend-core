export { };

declare global {
    interface String {
        /**
         * Checks if the string is a valid float.
         * @example
         * '12.3'.isFloat(); // true
         * 'abc'.isFloat(); // false
         */
        isFloat(): boolean;
    }
}

if (!('isFloat' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isFloat', {
        value: function(this: string): boolean {
            return /^-?\d+(\.\d+)?$/.test(this.trim());
        },
        writable: true,
        configurable: true,
    });
}