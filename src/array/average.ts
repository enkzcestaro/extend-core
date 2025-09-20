export {};

declare global {
    interface Array<T> {
        /**
         * Returns the average (mean) of all numeric elements in the array.
         * Non-number elements are ignored.
         *
         * @returns The average of the array elements, or NaN if no numbers exist.
         *
         * @example
         * ```ts
         * [1, 2, 3].average(); // 2
         * [1, 'a', 2].average(); // 1.5
         * [].average(); // NaN
         * ```
         */
        average(this: T extends number ? number[] : never): number;
    }
}

if (!('average' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'average', {
        value: function <T>(this: T[]): number {
            const numbers = this.filter((v) => typeof v === 'number');
            if (!numbers.length) return NaN;
            const sum = numbers.reduce((acc, val) => acc + val, 0);
            return sum / numbers.length;
        },
        writable: true,
        configurable: true,
    });
};