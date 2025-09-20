export {};

declare global {
    interface Date {
        /**
         * Checks if this date is before another date.
         *
         * @param otherDate The date to compare with
         * @returns true if this date is before otherDate, otherwise false
         *
         * @example
         * const d1 = new Date('2025-09-17');
         * const d2 = new Date('2025-09-18');
         * d1.isBefore(d2); // true
         */
        isBefore(otherDate: Date): boolean;
    }
}

if (!('isBefore' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isBefore', {
        value: function(this: Date, otherDate: Date): boolean {
            return this.getTime() < otherDate.getTime();
        },
        writable: true,
        configurable: true,
    });
}