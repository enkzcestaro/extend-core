export {};

declare global {
    interface String {
        /**
         * Splits string into an array of lines by newline character.
         *
         * @returns Array of lines
         *
         * @example
         * 'a\nb\nc'.splitLines(); // ['a','b','c']
         */
        splitLines(): string[];
    }
}

if (!('splitLines' in String.prototype)) {
    Object.defineProperty(String.prototype, 'splitLines', {
        value: function(this: string): string[] {
            return this.split(/\r?\n/);
        },
        writable: true,
        configurable: true,
    });
}