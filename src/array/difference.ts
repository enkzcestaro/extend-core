export {};

declare global {
    interface Array<T> {
        /**
         * Returns a new array excluding all values present in the other array(s).
         *
         * @example
         * [1, 2, 3, 4].difference([2, 4]); // [1, 3]
         *
         * @param values Array of values to exclude
         * @returns New array with excluded values
         */
        difference(values: T[]): T[];
    }
}

if (!('difference' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'difference', {
        value: function<T>(this: T[], values: T[]): T[] {
            const set = new Set(values);
            return this.filter(item => !set.has(item));
        },
        writable: true,
        configurable: true,
    });
}