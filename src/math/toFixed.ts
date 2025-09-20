export {};

declare global {
    interface Math {
        /**
         * Formats a number to fixed decimals.
         * @param n Number to format
         * @param decimals Number of decimals
         * @returns Formatted number
         * @example
         * Math.toFixed(3.14159, 2); // 3.14
         */
        toFixed(n: number, decimals: number): number;
    }
}

if (!('toFixed' in Math)) {
    Object.defineProperty(Math, 'toFixed', {
        value: (n: number, decimals: number) => parseFloat(n.toFixed(decimals)),
        writable: true,
        configurable: true,
    });
}