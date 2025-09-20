export {};

declare global {
    interface Date {
        /**
         * Subtracts n years from the date.
         *
         * @param n Number of years to subtract
         * @returns The updated Date object
         */
        subtractYears(n: number): Date;
    }
}

if (!('subtractYears' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'subtractYears', {
        value: function(this: Date, n: number): Date {
            this.setFullYear(this.getFullYear() - n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}