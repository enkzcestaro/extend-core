export {};

declare global {
    interface Array<T> {

        /**
         * Returns a random element from the array or `undefined` if the array is empty.
         *
         * @returns A random element of the array or `undefined`.
         *
         * @example
         * ```ts
         * const arr = [1, 2, 3];
         * console.log(arr.random()); // Could be 1, 2, or 3
         *
         * const emptyArr: number[] = [];
         * console.log(emptyArr.random()); // Output: undefined
         * ```
         */
        random(): T | undefined;
    }
}

if (!('random' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'random', {
        value: function <T>(this: T[]): T | undefined {
            if (this.length === 0) return undefined;
            const index = Math.floor(Math.random() * this.length);
            return this[index];
        },
        writable: true,
        configurable: true,
    });
};