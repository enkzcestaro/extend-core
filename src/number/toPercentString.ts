export {};

declare global {
    interface Number {
        /**
         * Converts the number to a percentage string with given decimals.
         *
         * @param decimals Number of decimal places (default 0)
         * @param suffixAtEnd Whether to put % at the end (true) or start (false). Default true.
         * @example
         * (0.1234).toPercentString(2); // "12.34%"
         * (0.1234).toPercentString(1, false); // "%12.3"
         */
        toPercentString(decimals?: number, suffixAtEnd?: boolean): string;
    }
}

if (!('toPercentString' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toPercentString', {
        value: function (decimals = 0, suffixAtEnd = true): string {
            const str = (this.valueOf() * 100).toFixed(decimals);
            return suffixAtEnd ? str + '%' : '%' + str;
        },
        writable: true,
        configurable: true,
    });
}

