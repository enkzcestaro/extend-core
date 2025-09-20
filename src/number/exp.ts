export {};

declare global {
    interface Number {
        /**
         * Returns e raised to the number.
         *
         * @example
         * (1).exp(); // Math.E
         */
        exp(): number;
    }
}

if (!('exp' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'exp', {
        value: function (): number {
            return Math.exp(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}