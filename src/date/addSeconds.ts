export {};

declare global {
    interface Date {
        /**
         * Adds n seconds to the date.
         *
         * @param n Number of seconds to add
         * @returns The modified date
         *
         * @example
         * const d = new Date('2025-09-17T12:00:00');
         * d.addSeconds(30); // 2025-09-17T12:00:30
         */
        addSeconds(n: number): Date;
    }
}

if (!('addSeconds' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'addSeconds', {
        value: function(this: Date, n: number): Date {
            this.setSeconds(this.getSeconds() + n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}