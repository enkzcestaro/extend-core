export {};

declare global {
    interface Number {
        /**
         * Formats the number as currency.
         *
         * @param locale Locale string (default: "en-US")
         * @param currency Currency code (default: "USD")
         * @returns The formatted currency string
         *
         * @example
         * (1234.56).toCurrency("en-US", "USD"); // "$1,234.56"
         * (1234.56).toCurrency("de-DE", "EUR"); // "1.234,56 €"
         */
        toCurrency(locale?: string, currency?: string): string;
    }
}

if (!('toCurrency' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toCurrency', {
        value: function (locale = "en-US", currency = "USD"): string {
            return new Intl.NumberFormat(locale, {
                style: "currency",
                currency,
            }).format(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}