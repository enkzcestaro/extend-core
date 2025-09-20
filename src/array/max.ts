export {};

declare global {
    interface Array<T> {
        
        /**
         * Returns the maximum numeric element in the array.
         * Non-number elements are ignored.
         *
         * @returns The maximum numeric element or `-Infinity` if there are no numeric elements.
         *
         * @example
         * ```ts
         * [1, 2, 3].max(); // 3
         * [1, 'a', 2].max(); // 2
         * [].max(); // -Infinity
         * ```
         */
        max(this: T extends number ? number[] : never): number;
    }
};

if (!('max' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'max', {
        value: function (this: number[]): number {
            return Math.max(...this);
        },
        writable: true,
        configurable: true,
    });
};