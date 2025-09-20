export {};

declare global {
    interface Number {
        /**
         * Checks if the number is between two values (inclusive).
         *
         * @param min Minimum value
         * @param max Maximum value
         * @returns true if the number is within the range, false otherwise
         *
         * @example
         * (5).between(1, 10);  // true
         * (0).between(1, 10);  // false
         */
        between(min: number, max: number): boolean;
    }
}

if (!('between' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'between', {
        value: function (min: number, max: number): boolean {
            const val = this.valueOf();
            return val >= min && val <= max;
        },
        writable: true,
        configurable: true,
    });
}