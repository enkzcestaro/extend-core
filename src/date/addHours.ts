export {};

declare global {
    interface Date {
        /**
         * Adds n hours to the date.
         *
         * @param n Number of hours to add
         * @returns The modified date
         *
         * @example
         * const d = new Date('2025-09-17T12:00:00');
         * d.addHours(3); // 2025-09-17T15:00:00
         */
        addHours(n: number): Date;
    }
}

if (!('addHours' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'addHours', {
        value: function(this: Date, n: number): Date {
            this.setHours(this.getHours() + n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}