export {};

declare global {
    interface Number {
        /**
         * Subtracts a given number.
         *
         * @param n Number to subtract
         * @example
         * (5).subtract(3); // 2
         */
        subtract(n: number): number;
    }
}

if (!('subtract' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'subtract', {
        value: function (n: number): number {
            return this.valueOf() - n;
        },
        writable: true,
        configurable: true,
    });
}