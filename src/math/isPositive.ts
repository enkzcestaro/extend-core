export {};

declare global {
    interface Math {
        /**
         * Checks if a number is positive.
         * @param n Number to check
         * @returns True if positive
         * @example
         * Math.isPositive(3); // true
         * Math.isPositive(-1); // false
         */
        isPositive(n: number): boolean;
    }
}

if (!('isPositive' in Math)) {
    Object.defineProperty(Math, 'isPositive', {
        value: (n: number) => n > 0,
        writable: true,
        configurable: true,
    });
}