export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be seconds) to days.
         *
         * @example
         * (172800).toDaysFromSeconds(); // 2
         */
        toDaysFromSeconds(): number;
    }
}

if (!('toDaysFromSeconds' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toDaysFromSeconds', {
        value: function (): number {
            return this.valueOf() / 86400;
        },
        writable: true,
        configurable: true,
    });
}