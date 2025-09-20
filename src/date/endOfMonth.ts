export {};

declare global {
    interface Date {
        /**
         * Returns the last day of the month.
         *
         * @returns The updated Date object
         */
        endOfMonth(): Date;
    }
}

if (!('endOfMonth' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'endOfMonth', {
        value: function(this: Date): Date {
            this.setMonth(this.getMonth() + 1, 0);
            this.endOfDay();
            return this;
        },
        writable: true,
        configurable: true,
    });
}