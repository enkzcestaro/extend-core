export {};

declare global {
    interface String {
        /**
         * Checks if the string contains only alphanumeric characters.
         *
         * @returns true if string is alphanumeric, false otherwise
         *
         * @example
         * 'abc123'.isAlphaNumeric(); // true
         * 'abc!123'.isAlphaNumeric(); // false
         */
        isAlphaNumeric(): boolean;
    }
}

if (!('isAlphaNumeric' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isAlphaNumeric', {
        value: function(this: string): boolean {
            return /^[a-zA-Z0-9]+$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}