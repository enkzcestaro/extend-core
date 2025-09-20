export {};

declare global {
    interface Number {
        /**
         * Returns an array of all divisors of the number.
         *
         * @example
         * (6).divisors(); // [1, 2, 3, 6]
         */
        divisors(): number[];
    }
}

if (!('divisors' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'divisors', {
        value: function (): number[] {
            const val = Math.floor(Math.abs(this.valueOf()));
            const result: number[] = [];
            for (let i = 1; i <= val; i++) {
                if (val % i === 0) result.push(i);
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}