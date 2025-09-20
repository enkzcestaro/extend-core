export {};

declare global {
    interface Math {
        /**
         * Checks if a number is negative.
         * @param n Number to check
         * @returns True if negative
         * @example
         * Math.isNegative(-5); // true
         * Math.isNegative(2); // false
         */
        isNegative(n: number): boolean;
    }
}

if (!('isNegative' in Math)) {
    Object.defineProperty(Math, 'isNegative', {
        value: (n: number) => n < 0,
        writable: true,
        configurable: true,
    });
}