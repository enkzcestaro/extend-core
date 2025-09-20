export {};

declare global {
    interface Number {
        /**
         * Returns the variance of this number and optionally other numbers.
         *
         * @example
         * (5).variance(7, 9); // variance of [5, 7, 9]
         */
        variance(...others: number[]): number;
    }
}

if (!('variance' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'variance', {
        value: function (...others: number[]): number {
            const numbers = [this.valueOf(), ...others];
            const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
            return numbers.reduce((acc, n) => acc + Math.pow(n - mean, 2), 0) / numbers.length;
        },
        writable: true,
        configurable: true,
    });
}