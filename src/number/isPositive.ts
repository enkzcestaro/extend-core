export {};

declare global {
    interface Number {
        /**
         * Checks if the number is positive.
         *
         * @example
         * (5).isPositive(); // true
         * (-3).isPositive(); // false
         */
        isPositive(): boolean;
    }
}

if (!('isPositive' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isPositive', {
        value: function (): boolean {
            return this.valueOf() > 0;
        },
        writable: true,
        configurable: true,
    });
}