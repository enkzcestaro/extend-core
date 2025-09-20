export {};

declare global {
    interface Date {
        /**
         * Checks if the date is today.
         *
         * @returns true if the date is today, false otherwise
         *
         * @example
         * new Date().isToday(); // true
         */
        isToday(): boolean;
    }
}

if (!('isToday' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isToday', {
        value: function(this: Date): boolean {
            const today = new Date();
            return this.getFullYear() === today.getFullYear() &&
                   this.getMonth() === today.getMonth() &&
                   this.getDate() === today.getDate();
        },
        writable: true,
        configurable: true,
    });
}