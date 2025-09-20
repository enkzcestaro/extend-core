export {};

declare global {
    interface Array<T> {
        /**
         * Calculates the standard deviation of a number array.
         * Only visible for number[].
         *
         * @returns The standard deviation
         *
         * @example
         * [2,4,4,4,5,5,7,9].std(); // 2
         */
        std(this: T extends number ? number[] : never): number;
    }
}

if (!('std' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'std', {
        value: function (this: number[]): number {
            const n = this.length;
            if (n === 0) return NaN;
            const mean = this.reduce((acc, val) => acc + val, 0) / n;
            const variance = this.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
            return Math.sqrt(variance);
        },
        writable: true,
        configurable: true,
    });
};