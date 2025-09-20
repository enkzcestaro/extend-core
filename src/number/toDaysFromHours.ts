export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be hours) to days.
         *
         * @example
         * (48).toDaysFromHours(); // 2
         */
        toDaysFromHours(): number;
    }
}

if (!('toDaysFromHours' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toDaysFromHours', {
        value: function (): number {
            return this.valueOf() / 24;
        },
        writable: true,
        configurable: true,
    });
}