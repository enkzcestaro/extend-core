export {};

declare global {
    interface Date {
        /**
         * Returns the name of the day (Monday, Tuesday, etc.).
         *
         * @returns Day name as string
         */
        dayName(): string;
    }
}

if (!('dayName' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'dayName', {
        value: function(this: Date): string {
            return this.toLocaleDateString('en-US', { weekday: 'long' });
        },
        writable: true,
        configurable: true,
    });
}