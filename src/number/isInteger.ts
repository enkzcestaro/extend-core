export {};

declare global {
    interface Number {
        /**
         * Checks if the number is an integer.
         *
         * @returns true if integer, false otherwise
         *
         * @example
         * (5).isInteger();   // true
         * (5.5).isInteger(); // false
         */
        isInteger(): boolean;
    }
}

if (!('isInteger' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isInteger', {
        value: function (): boolean {
            return Number.isInteger(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}