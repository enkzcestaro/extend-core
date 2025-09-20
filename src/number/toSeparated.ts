export {};

declare global {
    interface Number {
        /**
         * Converts the number to a string with a thousand separator (comma by default).
         *
         * @param separator Separator string (default ',')
         * @example
         * (1234567).toSeparated(); // "1,234,567"
         */
        toSeparated(separator?: string): string;
    }
}

if (!('toSeparated' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toSeparated', {
        value: function (separator = ','): string {
            return this.valueOf().toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        },
        writable: true,
        configurable: true,
    });
}