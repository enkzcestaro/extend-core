export {};

declare global {
    interface Math {
        /**
         * Checks if a number is isInfinity (i.e., Infinity, -Infinity, or NaN).
         *
         * @param n The number to check
         * @returns true if n is not finite, otherwise false
         *
         * @example
         * Math.isInfinity(Infinity); // true
         * Math.isInfinity(-Infinity); // true
         * Math.isInfinity(NaN); // true
         * Math.isInfinity(123); // false
         */
        isInfinity(n: number): boolean;
    }
}

if (!('isInfinity' in Math)) {
    Object.defineProperty(Math, 'isInfinity', {
        value: function(n: number): boolean {
            return !Number.isFinite(n);
        },
        writable: true,
        configurable: true,
    });
}
