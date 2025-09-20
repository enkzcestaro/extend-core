export {};

declare global {
    interface Date {
        /**
         * Returns the difference in months between this date and another.
         * @param otherDate The date to compare with
         * @returns Number of months
         * @example
         * new Date('2025-09-17').diffInMonths(new Date('2025-06-17')); // 3
         */
        diffInMonths(otherDate: Date): number;
    }
}

if (!('diffInMonths' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'diffInMonths', {
        value: function(this: Date, otherDate: Date): number {
            return (this.getFullYear() - otherDate.getFullYear()) * 12 + (this.getMonth() - otherDate.getMonth());
        },
        writable: true,
        configurable: true,
    });
}