export { };

declare global {
    interface Math {
        /**
         * Returns the z-score of a value given mean and stdDev.
         *
         * @example
         * Math.zScore(75, 50, 10); // 2.5
         *
         * @param value Value
         * @param mean Mean
         * @param stdDev Standard deviation
         * @returns Z-score
         */
        zScore(value: number, mean: number, stdDev: number): number;
    }
}

if (!('zScore' in Math)) {
    Object.defineProperty(Math, 'zScore', {
        value: function (value: number, mean: number, stdDev: number): number {
            return (value - mean) / stdDev;
        },
        writable: true,
        configurable: true,
    });
}