export {};

declare global {
    interface Number {
        /**
         * Returns the modulus of the number (always positive).
         *
         * @param other Divisor
         * @example
         * (-5).mod(3); // 1
         */
        mod(other: number): number;
    }
}

if (!('mod' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'mod', {
        value: function (other: number): number {
            const val = this.valueOf() % other;
            return val < 0 ? val + other : val;
        },
        writable: true,
        configurable: true,
    });
}