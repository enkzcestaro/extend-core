export {};

declare global {
    interface Date {
        /**
         * Checks if this date is after another date.
         *
         * @param otherDate The date to compare with
         * @returns true if this date is after otherDate, otherwise false
         *
         * @example
         * const d1 = new Date('2025-09-19');
         * const d2 = new Date('2025-09-18');
         * d1.isAfter(d2); // true
         */
        isAfter(otherDate: Date): boolean;
    }
}

if (!('isAfter' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isAfter', {
        value: function(this: Date, otherDate: Date): boolean {
            return this.getTime() > otherDate.getTime();
        },
        writable: true,
        configurable: true,
    });
}