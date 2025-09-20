export {};

declare global {
    interface Number {
        /**
         * Calculates the greatest common divisor (GCD) with another number.
         *
         * @param other Other number
         * @returns GCD
         *
         * @example
         * (12).gcd(18); // 6
         */
        gcd(other: number): number;
    }
}

if (!('gcd' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'gcd', {
        value: function (other: number): number {
            let a = Math.abs(this.valueOf());
            let b = Math.abs(other);
            while (b !== 0) {
                [a, b] = [b, a % b];
            }
            return a;
        },
        writable: true,
        configurable: true,
    });
}