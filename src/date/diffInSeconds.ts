export {};

declare global {
    interface Date {
        /**
         * Returns the difference in seconds between this date and another.
         * @param otherDate The date to compare with
         * @returns Number of seconds
         * @example
         * new Date('2025-09-17T12:00:30').diffInSeconds(new Date('2025-09-17T12:00:00')); // 30
         */
        diffInSeconds(otherDate: Date): number;
    }
}

if (!('diffInSeconds' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'diffInSeconds', {
        value: function(this: Date, otherDate: Date): number {
            const diffMs = this.getTime() - otherDate.getTime();
            return diffMs / 1000;
        },
        writable: true,
        configurable: true,
    });
}


new Date().toTimeString()