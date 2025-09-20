export {};

declare global {
    interface Array<T> {
        /**
         * Returns the product of all numbers in the array.
         * Only visible for number[].
         *
         * @returns The product of the array elements
         *
         * @example
         * [1,2,3,4].product(); // 24
         */
        product(this: T extends number ? number[] : never): number;
    }
}

if (!('product' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'product', {
        value: function (this: number[]): number {
            if (this.length === 0) return 1;
            return this.reduce((acc, val) => acc * val, 1);
        },
        writable: true,
        configurable: true,
    });
};