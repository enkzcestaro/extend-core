export {};

declare global {
    interface Date {
        /**
         * Sets the time to the start of the day (00:00:00).
         *
         * @returns The updated Date object
         */
        startOfDay(): Date;
    }
}

if (!('startOfDay' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'startOfDay', {
        value: function(this: Date): Date {
            this.setHours(0, 0, 0, 0);
            return this;
        },
        writable: true,
        configurable: true,
    });
}