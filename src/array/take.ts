export {};

declare global {
    interface Array<T> {
        /**
         * Returns the first `count` elements of the array.
         *
         * @param count Number of elements to take
         * @returns A new array with the first `count` elements
         *
         * @example
         * [1,2,3,4].take(2); // [1,2]
         */
        take(count: number): T[];
    }
}

if (!('take' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'take', {
        value: function <T>(this: T[], count: number): T[] {
            return count >= 0 ? this.slice(0, count) : this.slice(count);
        },
        writable: true,
        configurable: true,
    });
};