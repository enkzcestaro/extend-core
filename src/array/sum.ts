export {};

declare global {
    interface Array<T> {
        /**
         * Returns the sum of all numeric elements in the array.
         * Non-number elements are ignored.
         *
         * @returns The sum of the array elements.
         *
         * @example
         * ```ts
         * [1, 2, 3].sum(); // 6
         * [1, 'a', 2].sum(); // 3
         * ```
         */
         sum(this: T extends number ? number[] : never): number;
    }
};

if (!('sum' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'sum', {
        value: function <T>(this: T[]): number {
            return this.reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
        },
        writable: true,
        configurable: true,
    });
};