export {};

declare global {
    interface Array<T> {

        /**
         * Returns the first element of the array or `undefined` if the array is empty.
         *
         * @returns The first element of the array or `undefined`.
         *
         * @example
         * ```ts
         * const arr = [1, 2, 3];
         * console.log(arr.first()); // Output: 1
         *
         * const emptyArr: number[] = [];
         * console.log(emptyArr.first()); // Output: undefined
         * ```
         */
        first(): T | undefined;

    }
};

if (!('first' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'first', {
        value: function <T>(this: T[]): T | undefined {
            return this.length > 0 ? this[0] : undefined;
        },
        writable: true,
        configurable: true,
    });
};
