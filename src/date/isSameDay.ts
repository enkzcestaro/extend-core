export {};

declare global {
    interface Date {
        /**
         * Checks if two dates are on the same day.
         *
         * @param otherDate Date to compare
         * @returns true if same day
         *
         * @example
         * const d1 = new Date('2025-09-17');
         * const d2 = new Date('2025-09-17');
         * d1.isSameDay(d2); // true
         */
        isSameDay(otherDate: Date): boolean;
    }
}

if (!('isSameDay' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isSameDay', {
        value: function(this: Date, otherDate: Date): boolean {
            return this.getFullYear() === otherDate.getFullYear() &&
                   this.getMonth() === otherDate.getMonth() &&
                   this.getDate() === otherDate.getDate();
        },
        writable: true,
        configurable: true,
    });
}