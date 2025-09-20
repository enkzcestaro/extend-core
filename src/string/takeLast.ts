export {};

declare global {
    interface String {
        /**
         * Alias for `last(n)`. Returns the last `n` characters.
         *
         * @param n Number of characters to take from the end
         * @returns A new string with the last `n` characters
         *
         * @example
         * 'hello'.takeLast(3); // 'llo'
         */
        takeLast(n: number): string;
    }
}

if (!('takeLast' in String.prototype)) {
    Object.defineProperty(String.prototype, 'takeLast', {
        value: function(this: string, n: number): string {
            return this.slice(-n);
        },
        writable: true,
        configurable: true,
    });
}