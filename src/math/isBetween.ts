export {};

declare global {
    interface Math {
        /**
         * Checks if a number is between min and max (inclusive).
         * @param n Number to check
         * @param min Minimum value
         * @param max Maximum value
         * @returns True if n is between min and max
         * @example
         * Math.isBetween(5, 1, 10); // true
         * Math.isBetween(0, 1, 10); // false
         */
        isBetween(n: number, min: number, max: number): boolean;
    }
}

if (!('isBetween' in Math)) {
    Object.defineProperty(Math, 'isBetween', {
        value: (n: number, min: number, max: number) => n >= min && n <= max,
        writable: true,
        configurable: true,
    });
}