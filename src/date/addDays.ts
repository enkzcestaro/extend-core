export {};

declare global {
    interface Date {
        /**
         * Adds n days to the date.
         *
         * @param n Number of days to add
         * @returns The updated Date object
         *
         * @example
         * const d = new Date();
         * d.addDays(5); // 5 gün ekler
         */
        addDays(n: number): Date;
    }
}

if (!('addDays' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'addDays', {
        value: function(this: Date, n: number): Date {
            this.setDate(this.getDate() + n);
            return this;
        },
        writable: true,
        configurable: true,
    });
}

