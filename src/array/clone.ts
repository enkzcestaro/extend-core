export {};

declare global {
    interface Array<T> {
        /**
         * Returns a shallow copy of the array.
         *
         * @returns A new array with the same elements
         *
         * @example
         * const arr = [1,2,3];
         * const copy = arr.clone();
         * console.log(copy); // [1,2,3]
         * console.log(copy === arr); // false
         */
        clone(): T[];
    }
}

if (!('clone' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'clone', {
        value: function <T>(this: T[]): T[] {
            return this.slice();
        },
        writable: true,
        configurable: true,
    });
};