export {};

declare global {
    interface Array<T> {
        /**
         * Returns a new array excluding the first `count` elements.
         *
         * @param count Number of elements to drop from start
         * @returns A new array without the first `count` elements
         *
         * @example
         * [1,2,3,4].drop(2); // [3,4]
         */
        drop(count: number): T[];
    }
}

if (!('drop' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'drop', {
        value: function <T>(this: T[], count: number): T[] {
            return this.slice(count);
        },
        writable: true,
        configurable: true,
    });
};