export {};

declare global {
    interface Number {
        /**
         * Calculates the least common multiple (LCM) with another number.
         *
         * @param other Other number
         * @returns LCM
         *
         * @example
         * (12).lcm(18); // 36
         */
        lcm(other: number): number;
    }
}

if (!('lcm' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'lcm', {
        value: function (other: number): number {
            if (this.valueOf() === 0 || other === 0) return 0;
            return Math.abs(this.valueOf() * other) / this.gcd(other);
        },
        writable: true,
        configurable: true,
    });
}