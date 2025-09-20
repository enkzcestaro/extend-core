export {};

declare global {
    interface Date {
        /**
         * Returns the difference in full years between this date and another date.
         *
         * @param otherDate The date to compare with
         * @returns Number of years difference
         */
        differenceInYears(otherDate: Date): number;
    }
}

if (!('differenceInYears' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'differenceInYears', {
        value: function(this: Date, otherDate: Date): number {
            return this.getFullYear() - otherDate.getFullYear();
        },
        writable: true,
        configurable: true,
    });
}