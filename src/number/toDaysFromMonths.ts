export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be months) to days.
         *
         * @example
         * (3).toDaysFromMonths(); // 90
         */
        toDaysFromMonths(): number;
    }
}

if (!('toDaysFromMonths' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toDaysFromMonths', {
        value: function (): number {
            return this.valueOf() * 30;
        },
        writable: true,
        configurable: true,
    });
}