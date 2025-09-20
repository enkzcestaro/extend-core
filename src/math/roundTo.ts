export { };

declare global {
    interface Math {
        /**
         * Rounds a number to the specified number of decimal places.
         *
         * @example
         * Math.roundTo(3.14159, 2); // 3.14
         * Math.roundTo(1.005, 2);   // 1.01
         *
         * @param value The number to round
         * @param decimals Number of decimal places
         * @returns The rounded number
         */
        roundTo(value: number, decimals: number): number;
    }
}

if (!('roundTo' in Math)) {
    Object.defineProperty(Math, 'roundTo', {
        value: function (value: number, decimals: number): number {
            const factor = Math.pow(10, decimals);
            return Math.round(value * factor) / factor;
        },
        writable: true,
        configurable: true,
    });
}