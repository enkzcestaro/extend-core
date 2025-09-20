export {};

declare global {
    interface Number {
        /**
         * Converts the number to words (English or other locale if supported).
         *
         * @param locale Default "en"
         * @example
         * (123).toWords(); // "one hundred twenty-three"
         */
        toWords(locale?: string): string;
    }
}

if (!('toWords' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toWords', {
        value: function (locale = 'en'): string {
            return new Intl.NumberFormat(locale, { style: 'decimal' })
                .format(this.valueOf())
                .toString();
        },
        writable: true,
        configurable: true,
    });
}