export {};

declare global {
    interface String {
        /**
         * Checks if all alphabetic characters in the string are uppercase.
         *
         * @returns true if all letters are uppercase, false otherwise
         *
         * @example
         * 'HELLO'.isUpperCase(); // true
         * 'Hello'.isUpperCase(); // false
         */
        isUpperCase(): boolean;
    }
}

if (!('isUpperCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isUpperCase', {
        value: function(this: string): boolean {
            return /^[^a-z]*$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}