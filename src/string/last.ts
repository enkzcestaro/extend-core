export {};

declare global {
    interface String {
        /**
         * Returns the last `n` characters of the string.
         *
         * @param n Number of characters to take from the end
         * @returns A new string with the last `n` characters
         *
         * @example
         * 'hello'.last(); // 'o'
         * 'hello'.last(2); // 'lo'
         * 'hello'.last(0); // ''
         * 'hello'.last(10); // 'hello'
         */
        last(n?: number): string;
    }
}

if (!('last' in String.prototype)) {
    Object.defineProperty(String.prototype, 'last', {
        value: function(this: string, n: number = 1): string {
            return this.slice(-n);
        },
        writable: true,
        configurable: true,
    });
};