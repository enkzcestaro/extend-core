export {};

declare global {
    interface Date {
        /**
         * Checks if the date is a weekend (Saturday or Sunday).
         *
         * @returns true if weekend, false otherwise
         *
         * @example
         * new Date('2025-09-20').isWeekend(); // true (Saturday)
         */
        isWeekend(): boolean;
    }
}

if (!('isWeekend' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isWeekend', {
        value: function(this: Date): boolean {
            const day = this.getDay();
            return day === 0 || day === 6;
        },
        writable: true,
        configurable: true,
    });
}