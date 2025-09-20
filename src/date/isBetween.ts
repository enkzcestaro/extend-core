export {};

declare global {
    interface Date {
        /**
         * Checks if this date is between two other dates (inclusive).
         *
         * @param startDate Start date
         * @param endDate End date
         * @returns true if this date is between startDate and endDate
         *
         * @example
         * const d = new Date('2025-09-17');
         * d.isBetween(new Date('2025-09-16'), new Date('2025-09-18')); // true
         */
        isBetween(startDate: Date, endDate: Date): boolean;
    }
}

if (!('isBetween' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isBetween', {
        value: function(this: Date, startDate: Date, endDate: Date): boolean {
            const t = this.getTime();
            return t >= startDate.getTime() && t <= endDate.getTime();
        },
        writable: true,
        configurable: true,
    });
}