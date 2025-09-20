export {};

declare global {
    interface Math {
        /**
         * Converts a number to integer using Math.floor.
         * @param n Number to convert
         * @returns Integer value
         * @example
         * Math.toInt(5.7); // 5
         */
        toInt(n: number): number;
    }
}

if (!('toInt' in Math)) {
    Object.defineProperty(Math, 'toInt', {
        value: (n: number) => Math.floor(n),
        writable: true,
        configurable: true,
    });
}