export {};

declare global {
    interface Math {
        /**
         * Mathematical modulus (always positive).
         *
         * @param n Value
         * @param m Modulus
         * @returns n mod m
         *
         * @example
         * Math.mod(-3, 5); // 2
         */
        mod(n: number, m: number): number;
    }
}

if (!('mod' in Math)) {
    Object.defineProperty(Math, 'mod', {
        value: (n: number, m: number) => ((n % m) + m) % m,
        writable: true,
        configurable: true,
    });
}