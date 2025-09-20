export {};

declare global {
    interface Math {
        /**
         * Checks if a number n is a multiple of m.
         * @param n Number to check
         * @param m Base number
         * @returns True if n is a multiple of m
         * @example
         * Math.isMultipleOf(10, 2); // true
         * Math.isMultipleOf(7, 3); // false
         */
        isMultipleOf(n: number, m: number): boolean;
    }
}

if (!('isMultipleOf' in Math)) {
    Object.defineProperty(Math, 'isMultipleOf', {
        value: (n: number, m: number) => n % m === 0,
        writable: true,
        configurable: true,
    });
}