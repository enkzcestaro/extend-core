export {};

declare global {
    interface Date {
        /**
         * Adds n years to the date.
         *
         * @param n Number of years to add
         * @returns The updated Date object
         */
        addYears(n: number): Date;
    }
}

if (!('addYears' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'addYears', {
        value: function(this: Date, n: number): Date {
            this.setFullYear(this.getFullYear() + n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}