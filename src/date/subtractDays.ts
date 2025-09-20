export {};

declare global {
    interface Date {
        /**
         * Subtracts n days from the date.
         *
         * @param n Number of days to subtract
         * @returns The updated Date object
         */
        subtractDays(n: number): Date;
    }
}

if (!('subtractDays' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'subtractDays', {
        value: function(this: Date, n: number): Date {
            this.setDate(this.getDate() - n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}