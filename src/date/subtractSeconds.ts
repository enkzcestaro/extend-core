export {};

declare global {
    interface Date {
        /**
         * Subtracts n seconds from the date.
         *
         * @param n Number of seconds to subtract
         * @returns The modified date
         *
         * @example
         * const d = new Date('2025-09-17T12:00:00');
         * d.subtractSeconds(15); // 2025-09-17T11:59:45
         */
        subtractSeconds(n: number): Date;
    }
}

if (!('subtractSeconds' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'subtractSeconds', {
        value: function(this: Date, n: number): Date {
            this.setSeconds(this.getSeconds() - n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}