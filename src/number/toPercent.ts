export {};

declare global {
    interface Number {
        /**
         * Converts the number to a percentage string.
         *
         * @param decimals Number of decimal places (default: 0)
         * @returns Percentage string
         *
         * @example
         * (0.1234).toPercent(2); // "12.34%"
         */
        toPercent(decimals?: number): string;
    }
}

if (!('toPercent' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toPercent', {
        value: function (decimals: number = 0): string {
            return (this.valueOf() * 100).toFixed(decimals) + "%";
        },
        writable: true,
        configurable: true,
    });
}