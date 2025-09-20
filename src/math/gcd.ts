export {};

declare global {
    interface Math {
        /**
         * Returns the greatest common divisor (GCD) of two numbers.
         *
         * @param a First number
         * @param b Second number
         * @returns GCD
         *
         * @example
         * Math.gcd(12, 18); // 6
         */
        gcd(a: number, b: number): number;
    }
}

if (!('gcd' in Math)) {
    Object.defineProperty(Math, 'gcd', {
        value: (a: number, b: number) => b === 0 ? a : Math.gcd(b, a % b),
        writable: true,
        configurable: true,
    });
}