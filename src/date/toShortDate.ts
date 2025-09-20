export {};

declare global {
    interface Date {
        /**
         * Returns the date in short format "DD/MM/YYYY".
         * @param locale Optional locale string (default: 'default')
         * @returns Formatted date string
         * @example
         * new Date('2025-09-17').toShortDate(); // "17/09/2025"
         * new Date('2025-09-17').toShortDate('en-GB'); // "17/09/2025"
         */
        toShortDate(locale?: string): string;
    }
}

if (!('toShortDate' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'toShortDate', {
        value: function(this: Date, locale: string = 'default'): string {
            return this.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
        },
        writable: true,
        configurable: true,
    });
}