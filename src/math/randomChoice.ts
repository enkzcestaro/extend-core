export { };

declare global {
    interface Math {
        /**
         * Returns a random element from the given array.
         *
         * @example
         * Math.randomChoice([1, 2, 3, 4]); // 2
         * Math.randomChoice(['a', 'b', 'c']); // "c"
         *
         * @param array The array to pick from
         * @returns A random element from the array
         */
        randomChoice<T>(array: T[]): T;
    }
}

if (!('randomChoice' in Math)) {
    Object.defineProperty(Math, 'randomChoice', {
        value: function <T>(array: T[]): T {
            if (!Array.isArray(array) || array.length === 0) {
                throw new Error("Array must be non-empty");
            }
            const index = Math.floor(Math.random() * array.length);
            return array[index];
        },
        writable: true,
        configurable: true,
    });
}