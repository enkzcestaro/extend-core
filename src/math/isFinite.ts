export {};

declare global {
    interface Math {
        /**
         * Checks if a number is finite.
         * @param n Number to check
         * @returns True if n is finite
         * @example
         * Math.isFinite(5); // true
         * Math.isFinite(Infinity); // false
         */
        isFinite(n: number): boolean;
    }
}

if (!('isFinite' in Math)) {
    Object.defineProperty(Math, 'isFinite', {
        value: (n: number) => Number.isFinite(n),
        writable: true,
        configurable: true,
    });
}