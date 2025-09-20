export {};

declare global {
    interface Date {
        /**
         * Checks if the date is a weekday (Monday to Friday).
         *
         * @returns true if weekday, false otherwise
         *
         * @example
         * new Date('2025-09-17').isWeekday(); // true (Wednesday)
         */
        isWeekday(): boolean;
    }
}

if (!('isWeekday' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isWeekday', {
        value: function(this: Date): boolean {
            const day = this.getDay();
            return day >= 1 && day <= 5;
        },
        writable: true,
        configurable: true,
    });
}