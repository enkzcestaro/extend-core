export {};

declare global {
    interface Number {
        /**
         * Compares two numbers with optional tolerance.
         *
         * @param other Number to compare
         * @param tolerance Allowed difference
         * @example
         * (5.01).equals(5, 0.1); // true
         */
        equals(other: number, tolerance?: number): boolean;
    }
}

if (!('equals' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'equals', {
        value: function (other: number, tolerance = 0): boolean {
            return Math.abs(this.valueOf() - other) <= tolerance;
        },
        writable: true,
        configurable: true,
    });
}