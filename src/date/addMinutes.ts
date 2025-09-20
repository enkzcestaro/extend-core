export {};

declare global {
    interface Date {
        /**
         * Adds n minutes to the date.
         *
         * @param n Number of minutes to add
         * @returns The modified date
         *
         * @example
         * const d = new Date('2025-09-17T12:00:00');
         * d.addMinutes(15); // 2025-09-17T12:15:00
         */
        addMinutes(n: number): Date;
    }
}

if (!('addMinutes' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'addMinutes', {
        value: function(this: Date, n: number): Date {
            this.setMinutes(this.getMinutes() + n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}