export {};

declare global {
    interface Date {
        /**
         * Checks if the date is tomorrow.
         *
         * @returns true if the date is tomorrow, false otherwise
         *
         * @example
         * const d = new Date();
         * d.setDate(d.getDate() + 1);
         * d.isTomorrow(); // true
         */
        isTomorrow(): boolean;
    }
}

if (!('isTomorrow' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isTomorrow', {
        value: function(this: Date): boolean {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return this.getFullYear() === tomorrow.getFullYear() &&
                   this.getMonth() === tomorrow.getMonth() &&
                   this.getDate() === tomorrow.getDate();
        },
        writable: true,
        configurable: true,
    });
}