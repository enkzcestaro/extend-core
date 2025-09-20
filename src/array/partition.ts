export {};

declare global {
    interface Array<T> {
        /**
         * Splits the array into two arrays based on a predicate function.
         *
         * @param predicate Function to test each element `(item, index, array) => boolean`
         * @returns A tuple of two arrays: [matches, nonMatches]
         *
         * @example
         * [1,2,3,4].partition(x => x % 2 === 0); // [[2,4],[1,3]]
         */
        partition(predicate: (item: T, index: number, array: T[]) => boolean): [T[], T[]];
    }
}

if (!('partition' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'partition', {
        value: function <T>(this: T[], predicate: (item: T, index: number, array: T[]) => boolean): [T[], T[]] {
            const matches: T[] = [];
            const nonMatches: T[] = [];

            for (let i = 0; i < this.length; i++) {
                const item = this[i];
                if (predicate(item, i, this)) matches.push(item);
                else nonMatches.push(item);
            }

            return [matches, nonMatches];
        },
        writable: true,
        configurable: true,
    });
};