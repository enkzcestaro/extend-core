export {};

declare global {
    interface Date {
        /**
         * Returns the difference in minutes between this date and another.
         * @param otherDate The date to compare with
         * @returns Number of minutes
         * @example
         * new Date('2025-09-17T12:00').diffInMinutes(new Date('2025-09-17T11:30')); // 30
         */
        diffInMinutes(otherDate: Date): number;
    }
}

if (!('diffInMinutes' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'diffInMinutes', {
        value: function(this: Date, otherDate: Date): number {
            const diffMs = this.getTime() - otherDate.getTime();
            return diffMs / (1000 * 60);
        },
        writable: true,
        configurable: true,
    });
}