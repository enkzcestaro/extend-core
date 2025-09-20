export {};

declare global {
    interface Array<T> {
        
        /**
         * Returns the minimum numeric element in the array.
         * Non-number elements are ignored.
         *
         * @returns The minimum numeric element in the array or `Infinity` if there are no numeric elements.
         *
         * @example
         * ```ts
         * [3, 1, 4, 1, 5].min(); // 1
         * [1, 2, 'a', 3].min(); // 1
         * ['a', 'b', 'c'].min(); // Infinity
         * [].min(); // Infinity
         * ```
         */
        min(this: T extends number ? number[] : never): number;
    }
}

if (!('min' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'min', {
        value: function (this: number[]): number {
            return Math.min(...this);
        },
        writable: true,
        configurable: true,
    });
};