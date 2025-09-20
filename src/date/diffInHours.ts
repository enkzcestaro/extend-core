export {};

declare global {
    interface Date {
        /**
         * Returns the difference in hours between this date and another.
         * @param otherDate The date to compare with
         * @returns Number of hours
         * @example
         * new Date('2025-09-17T12:00').diffInHours(new Date('2025-09-17T08:00')); // 4
         */
        diffInHours(otherDate: Date): number;
    }
}

if (!('diffInHours' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'diffInHours', {
        value: function(this: Date, otherDate: Date): number {
            const diffMs = this.getTime() - otherDate.getTime();
            return diffMs / (1000 * 60 * 60);
        },
        writable: true,
        configurable: true,
    });
}