export { };

declare global {
    interface String {
        /**
         * Converts each character in the string to its Unicode escape sequence.
         *
         * @example
         * 'A'.toUnicode(); // "\\u0041"
         * 'AB'.toUnicode(); // "\\u0041\\u0042"
         *
         * @returns Unicode escape string
         */
        toUnicode(): string;
    }
}

if (!('toUnicode' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toUnicode', {
        value: function(this: string): string {
            return this
                .split('')
                .map(c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'))
                .join('');
        },
        writable: true,
        configurable: true,
    });
}