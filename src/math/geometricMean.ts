export { };

declare global {
    interface Math {
        /**
         * Calculates the geometric mean of numbers.
         *
         * @example
         * Math.geometricMean(1,4,16); // 4
         *
         * @param nums Numbers
         * @returns Geometric mean
         */
        geometricMean(...nums: number[]): number;
    }
}

if (!('geometricMean' in Math)) {
    Object.defineProperty(Math, 'geometricMean', {
        value: function (...nums: number[]): number {
            return Math.pow(nums.reduce((acc, val) => acc * val, 1), 1 / nums.length);
        },
        writable: true,
        configurable: true,
    });
}