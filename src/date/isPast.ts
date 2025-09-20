export {};

declare global {
    interface Date {
        /**
         * Checks if the date is in the past.
         *
         * @returns true if the date is before now, false otherwise
         *
         * @example
         * new Date('2020-01-01').isPast(); // true
         */
        isPast(): boolean;
    }
}

if (!('isPast' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isPast', {
        value: function(this: Date): boolean {
            return this.getTime() < Date.now();
        },
        writable: true,
        configurable: true,
    });
}