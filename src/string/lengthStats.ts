export {};

declare global {
    interface String {
        /**
         * Returns statistics about the string.
         *
         * @returns Object with length, word count, and line count
         *
         * @example
         * 'Hello world\nTest'.lengthStats(); // { length: 16, words: 3, lines: 2 }
         */
        lengthStats(): { length: number; words: number; lines: number };
    }
}

if (!('lengthStats' in String.prototype)) {
    Object.defineProperty(String.prototype, 'lengthStats', {
        value: function(this: string) {
            return {
                length: this.length,
                words: this.words().length,
                lines: this.splitLines().length,
            };
        },
        writable: true,
        configurable: true,
    });
}