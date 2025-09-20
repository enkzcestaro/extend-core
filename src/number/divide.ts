export {};

declare global {
    interface Number {
        /**
         * Divides the number by n.
         *
         * @param n The number to divide by
         * @example
         * (15).divide(3); // 5
         */
        divide(n: number): number;
    }
}

if (!('divide' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'divide', {
        value: function (n: number): number {
            return this.valueOf() / n;
        },
        writable: true,
        configurable: true,
    });
}