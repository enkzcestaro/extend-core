export { };

declare global {
    interface Math {
        /**
         * Returns the minimum value from an array.
         *
         * @example
         * Math.minArray([3,1,5]); // 1
         *
         * @param arr Array of numbers
         * @returns Minimum value
         */
        minArray(arr: number[]): number;
    }
}

if (!('minArray' in Math)) {
    Object.defineProperty(Math, 'minArray', {
        value: function (arr: number[]): number {
            return Math.min(...arr);
        },
        writable: true,
        configurable: true,
    });
}