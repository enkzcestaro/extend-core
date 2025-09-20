export { };

declare global {
    interface Math {
        /**
         * Calculates the root mean square (RMS) of numbers.
         *
         * @example
         * Math.rootMeanSquare(3,4); // 3.5355
         *
         * @param nums Numbers
         * @returns RMS value
         */
        rootMeanSquare(...nums: number[]): number;
    }
}

if (!('rootMeanSquare' in Math)) {
    Object.defineProperty(Math, 'rootMeanSquare', {
        value: function (...nums: number[]): number {
            return Math.sqrt(nums.reduce((acc, val) => acc + val * val, 0) / nums.length);
        },
        writable: true,
        configurable: true,
    });
}