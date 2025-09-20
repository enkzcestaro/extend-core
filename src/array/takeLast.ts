export {};

declare global {
    interface Array<T> {
        /**
         * Returns the last `count` elements of the array.
         *
         * @param count Number of elements to take from the end
         * @returns A new array with the last `count` elements
         *
         * @example
         * [1,2,3,4].takeLast(2); // [3,4]
         */
        takeLast(count: number): T[];
    }
}

if (!('takeLast' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'takeLast', {
        value: function <T>(this: T[], count: number): T[] {
            return this.slice(-count);
        },
        writable: true,
        configurable: true,
    });
};