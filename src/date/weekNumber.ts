export {};

declare global {
    interface Date {
        /**
         * Returns the ISO week number of the date.
         *
         * @returns Week number (1-53)
         *
         * @example
         * const d = new Date('2025-01-03');
         * d.weekNumber(); // 1
         */
        weekNumber(): number;
    }
}

if (!('weekNumber' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'weekNumber', {
        value: function(this: Date): number {
            const d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
            const dayNum = d.getUTCDay() || 7;
            d.setUTCDate(d.getUTCDate() + 4 - dayNum);
            const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
            return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
        },
        writable: true,
        configurable: true,
    });
}