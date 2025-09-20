export {};

declare global {
    interface Date {
        /**
         * Returns the first day of the year.
         *
         * @returns The updated Date object
         */
        startOfYear(): Date;
    }
}

if (!('startOfYear' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'startOfYear', {
        value: function(this: Date): Date {
            this.setMonth(0, 1);
            this.startOfDay();
            return this;
        },
        writable: true,
        configurable: true,
    });
}