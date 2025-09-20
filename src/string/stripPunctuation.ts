export {};

declare global {
    interface String {
        /**
         * Removes all punctuation/special characters from the string.
         *
         * @returns String without punctuation
         *
         * @example
         * 'Hello, world!'.stripPunctuation(); // 'Hello world'
         */
        stripPunctuation(): string;
    }
}

if (!('stripPunctuation' in String.prototype)) {
    Object.defineProperty(String.prototype, 'stripPunctuation', {
        value: function(this: string): string {
            return this.replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, '');
        },
        writable: true,
        configurable: true,
    });
}