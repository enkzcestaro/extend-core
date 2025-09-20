export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be milliseconds) to total seconds.
         *
         * @example
         * (65000).toSeconds(); // 65
         */
        toSeconds(): number;
    }
}

if (!('toSeconds' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toSeconds', {
        value: function (): number {
            return this.valueOf() / 1000;
        },
        writable: true,
        configurable: true,
    });
}