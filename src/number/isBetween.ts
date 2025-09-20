export {};

declare global {
    interface Number {
        /**
         * Checks if the number is strictly between min and max.
         *
         * @param min Minimum value
         * @param max Maximum value
         * @param inclusive Whether the boundaries are inclusive (default false)
         * @example
         * (5).isBetween(1, 10); // true
         * (1).isBetween(1, 10); // false
         * (1).isBetween(1, 10, true); // true
         */
        isBetween(min: number, max: number, inclusive?: boolean): boolean;
    }
}

if (!('isBetween' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isBetween', {
        value: function (min: number, max: number, inclusive = false): boolean {
            const val = this.valueOf();
            return inclusive ? val >= min && val <= max : val > min && val < max;
        },
        writable: true,
        configurable: true,
    });
}