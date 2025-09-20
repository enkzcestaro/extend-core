export {};

declare global {
    interface Date {
        /**
         * Returns the difference in full months between this date and another date.
         *
         * @param otherDate The date to compare with
         * @returns Number of months difference
         */
        differenceInMonths(otherDate: Date): number;
    }
}

if (!('differenceInMonths' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'differenceInMonths', {
        value: function(this: Date, otherDate: Date): number {
            return (this.getFullYear() - otherDate.getFullYear()) * 12 + (this.getMonth() - otherDate.getMonth());
        },
        writable: true,
        configurable: true,
    });
}