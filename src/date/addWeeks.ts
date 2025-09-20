export {};

declare global {
    interface Date {
        /**
         * Adds n weeks to the date.
         *
         * @param n Number of weeks to add
         * @returns The updated Date object
         */
        addWeeks(n: number): Date;
    }
}

if (!('addWeeks' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'addWeeks', {
        value: function(this: Date, n: number): Date {
            this.setDate(this.getDate() + n * 7);
            return this;
        },
        writable: true,
        configurable: true,
    });
}