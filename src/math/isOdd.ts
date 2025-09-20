export {};

declare global {
    interface Math {
        /**
         * Checks if a number is odd.
         * @param n Number to check
         * @returns True if odd, false otherwise
         * @example
         * Math.isOdd(3); // true
         * Math.isOdd(4); // false
         */
        isOdd(n: number): boolean;
    }
}

if (!('isOdd' in Math)) {
    Object.defineProperty(Math, 'isOdd', {
        value: (n: number) => n % 2 !== 0,
        writable: true,
        configurable: true,
    });
}