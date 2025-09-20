export {};

declare global {
    interface Number {
        /**
         * Returns the sign of the number.
         *
         * @returns -1 for negative, 0 for zero, 1 for positive
         *
         * @example
         * (-5).sign(); // -1
         * (0).sign();  // 0
         * (7).sign();  // 1
         */
        sign(): number;
    }
}

if (!('sign' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'sign', {
        value: function (): number {
            return Math.sign(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}