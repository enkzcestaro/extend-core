export {};

declare global {
    interface Number {
        /**
         * Returns the negative of the number.
         *
         * @example
         * (5).negate();  // -5
         * (-3).negate(); // 3
         */
        negate(): number;
    }
}

if (!('negate' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'negate', {
        value: function (): number {
            return -this.valueOf();
        },
        writable: true,
        configurable: true,
    });
}