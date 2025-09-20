export {};

declare global {
    interface Date {
        /**
         * Checks if two dates are in the same month.
         *
         * @param otherDate Date to compare
         * @returns true if same month
         *
         * @example
         * const d1 = new Date('2025-09-17');
         * const d2 = new Date('2025-09-01');
         * d1.isSameMonth(d2); // true
         */
        isSameMonth(otherDate: Date): boolean;
    }
}

if (!('isSameMonth' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isSameMonth', {
        value: function(this: Date, otherDate: Date): boolean {
            return this.getFullYear() === otherDate.getFullYear() &&
                   this.getMonth() === otherDate.getMonth();
        },
        writable: true,
        configurable: true,
    });
}