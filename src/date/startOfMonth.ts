export {};

declare global {
    interface Date {
        /**
         * Returns the first day of the month.
         *
         * @returns The updated Date object
         */
        startOfMonth(): Date;
    }
}

if (!('startOfMonth' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'startOfMonth', {
        value: function(this: Date): Date {
            this.setDate(1);
            this.startOfDay();
            return this;
        },
        writable: true,
        configurable: true,
    });
}