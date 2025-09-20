export {};

declare global {
    interface Array<T> {
        /**
         * Calculates the variance of a number array.
         * Only visible for number[].
         *
         * @returns The variance
         *
         * @example
         * [2,4,4,4,5,5,7,9].variance(); // 4
         */
        variance(this: T extends number ? number[] : never): number;
    }
}

if (!('variance' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'variance', {
        value: function (this: number[]): number {
            const n = this.length;
            if (n === 0) return NaN;
            const mean = this.reduce((acc, val) => acc + val, 0) / n;
            const variance = this.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
            return variance;
        },
        writable: true,
        configurable: true,
    });
};