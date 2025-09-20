export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be days) to approximate years.
         *
         * @example
         * (730).toYears(); // 2
         */
        toYears(): number;
    }
}

if (!('toYears' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toYears', {
        value: function (): number {
            const days = this.valueOf();
            return days / 365;
        },
        writable: true,
        configurable: true,
    });
}