export {};

declare global {
    interface Date {
        /**
         * Checks if the date is in the future.
         *
         * @returns true if the date is after now, false otherwise
         *
         * @example
         * new Date('2030-01-01').isFuture(); // true
         */
        isFuture(): boolean;
    }
}

if (!('isFuture' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isFuture', {
        value: function(this: Date): boolean {
            return this.getTime() > Date.now();
        },
        writable: true,
        configurable: true,
    });
}