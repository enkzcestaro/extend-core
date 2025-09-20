export { };

declare global {
    interface Math {
        /**
         * Calculates the percentage of a value relative to total.
         *
         * @example
         * Math.percentage(50, 200); // 25
         *
         * @param value The part value
         * @param total The total value
         * @returns Percentage (0-100)
         */
        percentage(value: number, total: number): number;
    }
}

if (!('percentage' in Math)) {
    Object.defineProperty(Math, 'percentage', {
        value: function (value: number, total: number): number {
            return (value / total) * 100;
        },
        writable: true,
        configurable: true,
    });
}
