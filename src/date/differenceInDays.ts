export {};

declare global {
    interface Date {
        /**
         * Returns the difference in full days between this date and another date.
         *
         * @param otherDate The date to compare with
         * @returns Number of days difference
         */
        differenceInDays(otherDate: Date): number;
    }
}

if (!('differenceInDays' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'differenceInDays', {
        value: function(this: Date, otherDate: Date): number {
            const diff = this.getTime() - otherDate.getTime();
            return Math.floor(diff / (1000 * 60 * 60 * 24));
        },
        writable: true,
        configurable: true,
    });
}