export {};

declare global {
    interface Array<T> {
    
        /**
         * Splits the array into chunks of the specified size.
         *
         * @param size - The size of each chunk. Must be a positive integer.
         * @returns An array of arrays, where each inner array is a chunk of the specified size.
         *
         * @example
         * ```ts
         * const arr = [1, 2, 3, 4, 5];
         * console.log(arr.chunk(2)); // Output: [[1, 2], [3, 4], [5]]
         * console.log(arr.chunk(3)); // Output: [[1, 2, 3], [4, 5]]
         * ```
         *
         * @throws {Error} If the specified size is not a positive integer.
         */
        chunk(size: number): T[][];
    }
};

if (!('chunk' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'chunk', {
        value: function <T>(this: T[], size: number): T[][] {
            if (size <= 0) throw new Error('Chunk size must be a positive integer.');
            const result: T[][] = [];
            for (let i = 0; i < this.length; i += size) {
                result.push(this.slice(i, i + size));
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
};
