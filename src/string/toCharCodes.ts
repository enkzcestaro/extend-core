export { };

declare global {
    interface String {
        /**
         * Converts the string to an array of character codes (UTF-16).
         *
         * @example
         * 'ABC'.toCharCodes(); // [65, 66, 67]
         * 'a'.toCharCodes(); // [97]
         *
         * @returns Array of UTF-16 character codes
         */
        toCharCodes(): number[];
    }
}

if (!('toCharCodes' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toCharCodes', {
        value: function(this: string): number[] {
            return this.split('').map(c => c.charCodeAt(0));
        },
        writable: true,
        configurable: true,
    });
}