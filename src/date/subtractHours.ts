export {};

declare global {
    interface Date {
        /**
         * Subtracts n hours from the date.
         *
         * @param n Number of hours to subtract
         * @returns The modified date
         *
         * @example
         * const d = new Date('2025-09-17T12:00:00');
         * d.subtractHours(2); // 2025-09-17T10:00:00
         */
        subtractHours(n: number): Date;
    }
}

if (!('subtractHours' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'subtractHours', {
        value: function(this: Date, n: number): Date {
            this.setHours(this.getHours() - n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}