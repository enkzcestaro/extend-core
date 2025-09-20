export {};

declare global {
    interface Date {
        /**
         * Checks if two dates are in the same year.
         *
         * @param otherDate Date to compare
         * @returns true if same year
         *
         * @example
         * const d1 = new Date('2025-09-17');
         * const d2 = new Date('2025-01-01');
         * d1.isSameYear(d2); // true
         */
        isSameYear(otherDate: Date): boolean;
    }
}

if (!('isSameYear' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isSameYear', {
        value: function(this: Date, otherDate: Date): boolean {
            return this.getFullYear() === otherDate.getFullYear();
        },
        writable: true,
        configurable: true,
    });
}