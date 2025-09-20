export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be milliseconds) to total minutes.
         *
         * @example
         * (65000).toMinutes(); // 1.0833333333333333
         */
        toMinutes(): number;
    }
}

if (!('toMinutes' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toMinutes', {
        value: function (): number {
            return this.valueOf() / 60000;
        },
        writable: true,
        configurable: true,
    });
}