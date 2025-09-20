export { };

declare global {
    interface Math {
        /**
         * Returns the sum of all numbers.
         *
         * @example
         * Math.sum(1,2,3,4); // 10
         *
         * @param nums Numbers to sum
         * @returns Sum
         */
        sum(...nums: number[]): number;
    }
}

if (!('sum' in Math)) {
    Object.defineProperty(Math, 'sum', {
        value: function (...nums: number[]): number {
            return nums.reduce((acc, val) => acc + val, 0);
        },
        writable: true,
        configurable: true,
    });
}