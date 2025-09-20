export {};

declare global {
    interface Date {
        /**
         * Returns the name of the month (January, February, etc.).
         *
         * @returns Month name as string
         */
        monthName(): string;
    }
}

if (!('monthName' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'monthName', {
        value: function(this: Date): string {
            return this.toLocaleDateString('en-US', { month: 'long' });
        },
        writable: true,
        configurable: true,
    });
}