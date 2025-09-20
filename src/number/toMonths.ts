export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be days) to approximate months.
         *
         * @example
         * (60).toMonths(); // 2
         */
        toMonths(): number;
    }
}

if (!('toMonths' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toMonths', {
        value: function (): number {
            const days = this.valueOf();
            return days / 30;
        },
        writable: true,
        configurable: true,
    });
}