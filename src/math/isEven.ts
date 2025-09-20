export {};

declare global {
    interface Math {
        /**
         * Checks if a number is even.
         * @param n Number to check
         * @returns True if even, false otherwise
         * @example
         * Math.isEven(4); // true
         * Math.isEven(3); // false
         */
        isEven(n: number): boolean;
    }
}

if (!('isEven' in Math)) {
    Object.defineProperty(Math, 'isEven', {
        value: (n: number) => n % 2 === 0,
        writable: true,
        configurable: true,
    });
}