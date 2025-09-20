export {};

declare global {
    interface Date {
        /**
         * Returns the last day of the year.
         *
         * @returns The updated Date object
         */
        endOfYear(): Date;
    }
}

if (!('endOfYear' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'endOfYear', {
        value: function(this: Date): Date {
            this.setMonth(11, 31);
            this.endOfDay();
            return this;
        },
        writable: true,
        configurable: true,
    });
}