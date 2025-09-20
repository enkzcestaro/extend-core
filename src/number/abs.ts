export {};

declare global {
    interface Number {
        /**
         * Returns the absolute value of the number.
         *
         * @returns Absolute value
         *
         * @example
         * (-5).abs(); // 5
         */
        abs(): number;
    }
}

if (!('abs' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'abs', {
        value: function (): number {
            return Math.abs(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}