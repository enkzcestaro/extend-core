export { };

declare global {
    interface Math {
        /**
         * Returns the range (max - min) of numbers.
         *
         * @example
         * Math.range(3,7,2); // 5
         *
         * @param nums Numbers
         * @returns Max - Min
         */
        range(...nums: number[]): number;
    }
}

if (!('range' in Math)) {
    Object.defineProperty(Math, 'range', {
        value: function (...nums: number[]): number {
            return Math.max(...nums) - Math.min(...nums);
        },
        writable: true,
        configurable: true,
    });
}