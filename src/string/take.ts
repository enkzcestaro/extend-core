export {};

declare global {
    interface String {
        /**
         * Alias for `first(n)`. Returns the first `n` characters.
         *
         * @param n Number of characters to take
         * @returns A new string with the first `n` characters
         *
         * @example
         * 'hello'.take(3); // 'hel'
         */
        take(n: number): string;
    }
}

if (!('take' in String.prototype)) {
    Object.defineProperty(String.prototype, 'take', {
        value: function(this: string, n: number): string {
            return this.slice(0, n);
        },
        writable: true,
        configurable: true,
    });
};