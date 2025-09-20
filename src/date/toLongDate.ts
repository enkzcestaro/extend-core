export {};

declare global {
    interface Date {
        /**
         * Returns the date in long format "DD Month YYYY".
         * @param locale Optional locale string (default: 'default')
         * @returns Formatted date string
         * @example
         * new Date('2025-09-17').toLongDate(); // "17 September 2025"
         * new Date('2025-09-17').toLongDate('tr-TR'); // "17 Eylül 2025"
         */
        toLongDate(locale?: string): string;
    }
}

if (!('toLongDate' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'toLongDate', {
        value: function(this: Date, locale: string = 'default'): string {
            return this.toLocaleDateString(locale, { day: '2-digit', month: 'long', year: 'numeric' });
        },
        writable: true,
        configurable: true,
    });
}