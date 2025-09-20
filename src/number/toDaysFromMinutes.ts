export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be minutes) to days.
         *
         * @example
         * (2880).toDaysFromMinutes(); // 2
         */
        toDaysFromMinutes(): number;
    }
}

if (!('toDaysFromMinutes' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toDaysFromMinutes', {
        value: function (): number {
            return this.valueOf() / 1440;
        },
        writable: true,
        configurable: true,
    });
}