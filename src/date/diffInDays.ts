export {};

declare global {
    interface Date {
        /**
         * Returns the difference in days between this date and another.
         * @param otherDate The date to compare with
         * @returns Number of days
         * @example
         * new Date('2025-09-17').diffInDays(new Date('2025-09-20')); // -3
         */
        diffInDays(otherDate: Date): number;
    }
}

if (!('diffInDays' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'diffInDays', {
        value: function(this: Date, otherDate: Date): number {
            const diffMs = this.getTime() - otherDate.getTime();
            return diffMs / (1000 * 60 * 60 * 24);
        },
        writable: true,
        configurable: true,
    });
}