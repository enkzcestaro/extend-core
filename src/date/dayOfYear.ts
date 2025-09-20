export {};

declare global {
    interface Date {
        /**
         * Returns the day of the year (1-366).
         *
         * @returns Day of the year
         *
         * @example
         * const d = new Date('2025-01-15');
         * d.dayOfYear(); // 15
         */
        dayOfYear(): number;
    }
}

if (!('dayOfYear' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'dayOfYear', {
        value: function(this: Date): number {
            const start = new Date(this.getFullYear(), 0, 0);
            const diff = this.getTime() - start.getTime();
            return Math.floor(diff / 86400000);
        },
        writable: true,
        configurable: true,
    });
}