export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be seconds) to total milliseconds.
         *
         * @example
         * (65).toMilliseconds(); // 65000
         */
        toMilliseconds(): number;
    }
}

if (!('toMilliseconds' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toMilliseconds', {
        value: function (): number {
            return this.valueOf() * 1000;
        },
        writable: true,
        configurable: true,
    });
}