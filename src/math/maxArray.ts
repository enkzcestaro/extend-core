export { };

declare global {
    interface Math {
        /**
         * Returns the maximum value from an array.
         *
         * @example
         * Math.maxArray([3,1,5]); // 5
         *
         * @param arr Array of numbers
         * @returns Maximum value
         */
        maxArray(arr: number[]): number;
    }
}

if (!('maxArray' in Math)) {
    Object.defineProperty(Math, 'maxArray', {
        value: function (arr: number[]): number {
            return Math.max(...arr);
        },
        writable: true,
        configurable: true,
    });
}