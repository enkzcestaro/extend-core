export {};

declare global {
    interface Number {
        /**
         * Checks if the number is negative.
         *
         * @example
         * (-5).isNegative(); // true
         * (3).isNegative();  // false
         */
        isNegative(): boolean;
    }
}

if (!('isNegative' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isNegative', {
        value: function (): boolean {
            return this.valueOf() < 0;
        },
        writable: true,
        configurable: true,
    });
}