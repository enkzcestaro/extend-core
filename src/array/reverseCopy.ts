export {};

declare global {
    interface Array<T> {
        /**
         * Returns a new array which is the reverse of the original array.
         * Original array is not modified.
         *
         * @returns A new reversed array
         *
         * @example
         * [1,2,3].reverseCopy(); // [3,2,1]
         * const arr = [1,2,3];
         * arr.reverseCopy(); // [3,2,1], arr remains [1,2,3]
         */
        reverseCopy(): T[];
    }
}

if (!('reverseCopy' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'reverseCopy', {
        value: function <T>(this: T[]): T[] {
            return this.slice().reverse();
        },
        writable: true,
        configurable: true,
    });
};