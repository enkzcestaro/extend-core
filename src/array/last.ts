export {};

declare global {
    interface Array<T> {

        /**
         * Returns the last element of the array or `undefined` if the array is empty.
         *
         * @returns The last element of the array or `undefined`.
         *
         * @example
         * ```ts
         * const arr = [1, 2, 3];
         * console.log(arr.last()); // Output: 3
         *
         * const emptyArr: number[] = [];
         * console.log(emptyArr.last()); // Output: undefined
         * ```
         */
        last(): T | undefined;

    }
};

if (!('last' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'last', {
        value: function <T>(this: T[]): T | undefined {
            return this.length > 0 ? this[this.length - 1] : undefined;
        },
        writable: true,
        configurable: true,
    });
};
