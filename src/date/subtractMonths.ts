export {};

declare global {
    interface Date {
        /**
         * Subtracts n months from the date.
         *
         * @param n Number of months to subtract
         * @returns The updated Date object
         */
        subtractMonths(n: number): Date;
    }
}

if (!('subtractMonths' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'subtractMonths', {
        value: function(this: Date, n: number): Date {
            this.setMonth(this.getMonth() - n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}