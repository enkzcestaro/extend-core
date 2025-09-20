export {};

declare global {
    interface Number {
        /**
         * Calculates the factorial of the number.
         *
         * @returns Factorial value, NaN if negative or not an integer
         *
         * @example
         * (5).factorial(); // 120
         * (0).factorial(); // 1
         */
        factorial(): number;
    }
}

if (!('factorial' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'factorial', {
        value: function (): number {
            const n = this.valueOf();
            if (n < 0 || !Number.isInteger(n)) return NaN;
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}