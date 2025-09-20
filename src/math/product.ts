export { };

declare global {
    interface Math {
        /**
         * Returns the product of all numbers.
         *
         * @example
         * Math.product(2,3,4); // 24
         *
         * @param nums Numbers to multiply
         * @returns Product
         */
        product(...nums: number[]): number;
    }
}

if (!('product' in Math)) {
    Object.defineProperty(Math, 'product', {
        value: function (...nums: number[]): number {
            return nums.reduce((acc, val) => acc * val, 1);
        },
        writable: true,
        configurable: true,
    });
}