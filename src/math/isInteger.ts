export {};

declare global {
    interface Math {
        /**
         * Checks if a number is an integer.
         * @param n Number to check
         * @returns True if integer
         * @example
         * Math.isInteger(5); // true
         * Math.isInteger(5.1); // false
         */
        isInteger(n: number): boolean;
    }
}

if (!('isInteger' in Math)) {
    Object.defineProperty(Math, 'isInteger', {
        value: (n: number) => Number.isInteger(n),
        writable: true,
        configurable: true,
    });
}