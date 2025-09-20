export {};

declare global {
    interface Math {
        /**
         * Returns the least common multiple (LCM) of two numbers.
         *
         * @param a First number
         * @param b Second number
         * @returns LCM
         *
         * @example
         * Math.lcm(4, 6); // 12
         */
        lcm(a: number, b: number): number;
    }
}

if (!('lcm' in Math)) {
    Object.defineProperty(Math, 'lcm', {
        value: (a: number, b: number) => Math.abs(a * b) / Math.gcd(a, b),
        writable: true,
        configurable: true,
    });
}