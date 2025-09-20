export {};

declare global {
    interface String {
        /**
         * Checks if all alphabetic characters in the string are lowercase.
         *
         * @returns true if all letters are lowercase, false otherwise
         *
         * @example
         * 'hello'.isLowerCase(); // true
         * 'Hello'.isLowerCase(); // false
         */
        isLowerCase(): boolean;
    }
}

if (!('isLowerCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isLowerCase', {
        value: function(this: string): boolean {
            return /^[^A-Z]*$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}