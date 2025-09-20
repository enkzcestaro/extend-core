export {};

declare global {
    interface String {
        /**
         * Returns a new string without the first `n` characters.
         *
         * @param n Number of characters to drop from the start
         * @returns A new string without the first `n` characters
         *
         * @example
         * 'hello'.drop(2); // 'llo'
         */
        drop(n: number): string;
    }
}

if (!('drop' in String.prototype)) {
    Object.defineProperty(String.prototype, 'drop', {
        value: function(this: string, n: number): string {
            return this.slice(n);
        },
        writable: true,
        configurable: true,
    });
}