export {};

declare global {
    interface String {
        /**
         * Splits the string into chunks of given size.
         *
         * @param n Chunk size
         * @returns Array of string chunks
         *
         * @example
         * 'abcdef'.chunk(2); // ['ab','cd','ef']
         */
        chunk(n: number): string[];
    }
}

if (!('chunk' in String.prototype)) {
    Object.defineProperty(String.prototype, 'chunk', {
        value: function(this: string, n: number): string[] {
            const result: string[] = [];
            for (let i = 0; i < this.length; i += n) {
                result.push(this.slice(i, i + n));
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}