export {};

declare global {
    interface String {
        /**
         * Splits string into an array of words.
         *
         * @returns Array of words
         *
         * @example
         * 'Hello world!'.words(); // ['Hello','world']
         */
        words(): string[];
    }
}

if (!('words' in String.prototype)) {
    Object.defineProperty(String.prototype, 'words', {
        value: function(this: string): string[] {
            return this.match(/\b\w+\b/g) || [];
        },
        writable: true,
        configurable: true,
    });
}