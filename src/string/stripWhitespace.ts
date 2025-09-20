export {};

declare global {
    interface String {
        /**
         * Removes all whitespace characters from the string.
         *
         * @returns String without spaces
         *
         * @example
         * ' a b c '.stripWhitespace(); // 'abc'
         */
        stripWhitespace(): string;
    }
}

if (!('stripWhitespace' in String.prototype)) {
    Object.defineProperty(String.prototype, 'stripWhitespace', {
        value: function(this: string): string {
            return this.replace(/\s+/g, '');
        },
        writable: true,
        configurable: true,
    });
}