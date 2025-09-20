export {};

declare global {
    interface Date {
        /**
         * Checks if the year of the date is a leap year.
         *
         * @returns true if it's a leap year, false otherwise
         *
         * @example
         * new Date('2024-01-01').isLeapYear(); // true
         */
        isLeapYear(): boolean;
    }
}

if (!('isLeapYear' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isLeapYear', {
        value: function(this: Date): boolean {
            const year = this.getFullYear();
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        },
        writable: true,
        configurable: true,
    });
}