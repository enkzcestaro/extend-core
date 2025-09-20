export {};

declare global {
    interface Array<T> {
        /**
         * Returns a new array excluding the last `count` elements.
         *
         * @param count Number of elements to drop from end
         * @returns A new array without the last `count` elements
         *
         * @example
         * [1,2,3,4].dropLast(2); // [1,2]
         */
        dropLast(count: number): T[];
    }
}

if (!('dropLast' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'dropLast', {
        value: function <T>(this: T[], count: number): T[] {
            return this.slice(0, -count);
        },
        writable: true,
        configurable: true,
    });
};