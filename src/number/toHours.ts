export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be milliseconds) to total hours.
         *
         * @example
         * (3600000).toHours(); // 1
         */
        toHours(): number;
    }
}

if (!('toHours' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toHours', {
        value: function (): number {
            return this.valueOf() / 3600000;
        },
        writable: true,
        configurable: true,
    });
}