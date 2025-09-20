export {};

declare global {
    interface Date {
        /**
         * Sets the time to the end of the day (23:59:59.999).
         *
         * @returns The updated Date object
         */
        endOfDay(): Date;
    }
}

if (!('endOfDay' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'endOfDay', {
        value: function(this: Date): Date {
            this.setHours(23, 59, 59, 999);
            return this;
        },
        writable: true,
        configurable: true,
    });
}