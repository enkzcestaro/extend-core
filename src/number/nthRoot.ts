export {};

declare global {
    interface Number {
        /**
         * Returns the nth root of the number.
         *
         * @param n Root to calculate
         * @example
         * (27).nthRoot(3); // 3
         */
        nthRoot(n: number): number;
    }
}

if (!('nthRoot' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'nthRoot', {
        value: function (n: number): number {
            return Math.pow(this.valueOf(), 1 / n);
        },
        writable: true,
        configurable: true,
    });
}