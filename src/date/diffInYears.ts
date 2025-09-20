export {};

declare global {
    interface Date {
        /**
         * Returns the difference in years between this date and another.
         * @param otherDate The date to compare with
         * @returns Number of years
         * @example
         * new Date('2025-09-17').diffInYears(new Date('2020-09-17')); // 5
         */
        diffInYears(otherDate: Date): number;
    }
}

if (!('diffInYears' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'diffInYears', {
        value: function(this: Date, otherDate: Date): number {
            return this.getFullYear() - otherDate.getFullYear();
        },
        writable: true,
        configurable: true,
    });
}