export { };

declare global {
    interface Math {
        /**
         * Calculates the harmonic mean of numbers.
         *
         * @example
         * Math.harmonicMean(1,2,4); // 1.7142857
         *
         * @param nums Numbers
         * @returns Harmonic mean
         */
        harmonicMean(...nums: number[]): number;
    }
}

if (!('harmonicMean' in Math)) {
    Object.defineProperty(Math, 'harmonicMean', {
        value: function (...nums: number[]): number {
            return nums.length / nums.reduce((acc, val) => acc + 1 / val, 0);
        },
        writable: true,
        configurable: true,
    });
}