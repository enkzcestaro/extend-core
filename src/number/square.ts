export {};

declare global {
    interface Number {
        /**
         * Returns the square of the number.
         *
         * @example
         * (5).square(); // 25
         */
        square(): number;
    }
}

if (!('square' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'square', {
        value: function (): number {
            return Math.pow(this.valueOf(), 2);
        },
        writable: true,
        configurable: true,
    });
}