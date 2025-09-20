export {};

declare global {
    interface Array<T> {
        /**
         * Returns the intersection of this array with another array.
         *
         * @param otherArray The array to intersect with
         * @example
         * [1,2,3].intersection([2,3,4]); // [2,3]
         * ['a','b'].intersection(['b','c']); // ['b']
         *
         * @returns A new array with elements present in both arrays
         */
        intersection(otherArray: T[]): T[];
    }
}

if (!('intersection' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'intersection', {
        value: function<T>(this: T[], otherArray: T[]): T[] {
            return this.filter(item => otherArray.includes(item));
        },
        writable: true,
        configurable: true,
    });
}