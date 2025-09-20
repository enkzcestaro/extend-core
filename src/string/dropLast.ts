export {};

declare global {
    interface String {
        /**
         * Returns a new string without the last `n` characters.
         *
         * @param n Number of characters to drop from the end
         * @returns A new string without the last `n` characters
         *
         * @example
         * 'hello'.dropLast(2); // 'hel'
         */
        dropLast(n: number): string;
    }
}

if (!('dropLast' in String.prototype)) {
    Object.defineProperty(String.prototype, 'dropLast', {
        value: function(this: string, n: number): string {
            return this.slice(0, -n);
        },
        writable: true,
        configurable: true,
    });
}