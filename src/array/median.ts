export {};

declare global {
    interface Array<T> {
        /**
         * Returns the median of all numeric elements in the array.
         * Non-number elements are ignored.
         *
         * @returns The median value, or NaN if there are no numeric elements.
         *
         * @example
         * ```ts
         * [1, 2, 3].median(); // 2
         * [1, 'a', 2, 4].median(); // 2
         * [1].median(); // 1
         * [].median(); // NaN
         * ```
         */
        median(this: T extends number ? number[] : never): number;
    }
};

if (!('median' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'median', {
        value: function <T>(this: T[]): number {
            const numbers = this.filter((v) => typeof v === 'number').sort((a, b) => a - b);
            const len = numbers.length;
            if (len === 0) return NaN;
            const mid = Math.floor(len / 2);
            if (len % 2 === 0) {
                return (numbers[mid - 1] + numbers[mid]) / 2;
            } else {
                return numbers[mid];
            }
        },
        writable: true,
        configurable: true,
    });
};