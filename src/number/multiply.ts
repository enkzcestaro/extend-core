export {};

declare global {
    interface Number {
        /**
         * Multiplies the number by n.
         *
         * @param n The number to multiply with
         * @example
         * (5).multiply(3); // 15
         */
        multiply(n: number): number;
    }
}

if (!('multiply' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'multiply', {
        value: function (n: number): number {
            return this.valueOf() * n;
        },
        writable: true,
        configurable: true,
    });
}