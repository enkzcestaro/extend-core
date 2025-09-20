export {};

declare global {
    interface Math {
        /**
         * Calculates factorial of a number.
         *
         * @param n Non-negative integer
         * @returns n!
         *
         * @example
         * Math.factorial(5); // 120
         */
        factorial(n: number): number;
    }
}

if (!('factorial' in Math)) {
    Object.defineProperty(Math, 'factorial', {
        value: (n: number) => {
            if (n < 0) throw new RangeError('n must be non-negative');
            let res = 1;
            for (let i = 2; i <= n; i++) res *= i;
            return res;
        },
        writable: true,
        configurable: true,
    });
}