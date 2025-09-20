export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be years) to days.
         *
         * @example
         * (2).toDaysFromYears(); // 730
         */
        toDaysFromYears(): number;
    }
}

if (!('toDaysFromYears' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toDaysFromYears', {
        value: function (): number {
            return this.valueOf() * 365;
        },
        writable: true,
        configurable: true,
    });
}