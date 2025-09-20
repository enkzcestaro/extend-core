export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be milliseconds) to total days.
         *
         * @example
         * (86400000).toDays(); // 1
         */
        toDays(): number;
    }
}

if (!('toDays' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toDays', {
        value: function (): number {
            return this.valueOf() / 86400000;
        },
        writable: true,
        configurable: true,
    });
}