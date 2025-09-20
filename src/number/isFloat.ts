export {};

declare global {
    interface Number {
        /**
         * Checks if the number is a float (non-integer).
         *
         * @returns true if float, false otherwise
         *
         * @example
         * (5.5).isFloat(); // true
         * (5).isFloat();   // false
         */
        isFloat(): boolean;
    }
}

if (!('isFloat' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isFloat', {
        value: function (): boolean {
            return Number.isFinite(this.valueOf()) && !Number.isInteger(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}