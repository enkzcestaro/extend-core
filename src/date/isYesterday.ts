export {};

declare global {
    interface Date {
        /**
         * Checks if the date is yesterday.
         *
         * @returns true if the date is yesterday, false otherwise
         *
         * @example
         * const d = new Date();
         * d.setDate(d.getDate() - 1);
         * d.isYesterday(); // true
         */
        isYesterday(): boolean;
    }
}

if (!('isYesterday' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'isYesterday', {
        value: function(this: Date): boolean {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return this.getFullYear() === yesterday.getFullYear() &&
                   this.getMonth() === yesterday.getMonth() &&
                   this.getDate() === yesterday.getDate();
        },
        writable: true,
        configurable: true,
    });
}