export {};

declare global {
    interface Date {
        /**
         * Subtracts n minutes from the date.
         *
         * @param n Number of minutes to subtract
         * @returns The modified date
         *
         * @example
         * const d = new Date('2025-09-17T12:00:00');
         * d.subtractMinutes(30); // 2025-09-17T11:30:00
         */
        subtractMinutes(n: number): Date;
    }
}

if (!('subtractMinutes' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'subtractMinutes', {
        value: function(this: Date, n: number): Date {
            this.setMinutes(this.getMinutes() - n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}