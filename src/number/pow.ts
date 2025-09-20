export {};

declare global {
    interface Number {
        /**
         * Raises the number to the given power.
         *
         * @param exp Exponent
         * @example
         * (2).pow(3); // 8
         */
        pow(exp: number): number;
    }
}

if (!('pow' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'pow', {
        value: function (exp: number): number {
            return Math.pow(this.valueOf(), exp);
        },
        writable: true,
        configurable: true,
    });
}