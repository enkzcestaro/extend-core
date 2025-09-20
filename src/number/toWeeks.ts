export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be days) to approximate weeks.
         *
         * @example
         * (21).toMonths(); // 3
         */
        toWeeks(): number;
    }
}

if (!('toWeeks' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toWeeks', {
        value: function (): number {
            const days = this.valueOf();
            return days / 7;
        },
        writable: true,
        configurable: true,
    });
}