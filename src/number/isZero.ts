export {};

declare global {
    interface Number {
        /**
         * Checks if the number is zero.
         *
         * @example
         * (0).isZero(); // true
         * (5).isZero(); // false
         */
        isZero(): boolean;
    }
}

if (!('isZero' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isZero', {
        value: function (): boolean {
            return this.valueOf() === 0;
        },
        writable: true,
        configurable: true,
    });
}