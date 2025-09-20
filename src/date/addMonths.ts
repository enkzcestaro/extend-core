export {};

declare global {
    interface Date {
        /**
         * Adds n months to the date.
         *
         * @param n Number of months to add
         * @returns The updated Date object
         */
        addMonths(n: number): Date;
    }
}

if (!('addMonths' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'addMonths', {
        value: function(this: Date, n: number): Date {
            this.setMonth(this.getMonth() + n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}