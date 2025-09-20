export {};

declare global {
    interface String {
        /**
         * Returns the first `n` characters of the string.
         *
         * @param n Number of characters to take
         * @returns A new string with the first `n` characters
         *
         * @example
         * 'hello'.first(2); // 'he'
         * 'hello'.first(); // 'h'
         * 'hello'.first(0); // ''
         * 'hello'.first(10); // 'hello'
         */
        first(n?: number): string;
    }
}

if (!('first' in String.prototype)) {
    Object.defineProperty(String.prototype, 'first', {
        value: function(this: string, n?: number): string {
            return this.slice(0, n ?? 1);
        },
        writable: true,
        configurable: true,
    });
};
