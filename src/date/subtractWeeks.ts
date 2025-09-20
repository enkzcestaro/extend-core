export {};

declare global {
    interface Date {
        /**
         * Subtracts n weeks from the date.
         *
         * @param n Number of weeks to subtract
         * @returns The updated Date object
         */
        subtractWeeks(n: number): Date;
    }
}

if (!('subtractWeeks' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'subtractWeeks', {
        value: function(this: Date, n: number): Date {
            this.setDate(this.getDate() - n * 7);
            return this;
        },
        writable: true,
        configurable: true,
    });
}