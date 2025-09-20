export {};

declare global {
    interface Number {
        /**
         * Checks if the number is within a range.
         *
         * @param min Minimum
         * @param max Maximum
         * @param inclusive Include boundaries (default true)
         * @example
         * (5).inRange(1, 10); // true
         */
        inRange(min: number, max: number, inclusive?: boolean): boolean;
    }
}

if (!('inRange' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'inRange', {
        value: function (min: number, max: number, inclusive = true): boolean {
            const val = this.valueOf();
            return inclusive ? val >= min && val <= max : val > min && val < max;
        },
        writable: true,
        configurable: true,
    });
}