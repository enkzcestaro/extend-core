export {};

declare global {
    interface Number {
        /**
         * Checks if the number is a multiple of another number.
         *
         * @param other Number to check multiple
         * @example
         * (12).isMultipleOf(3); // true
         * (12).isMultipleOf(5); // false
         */
        isMultipleOf(other: number): boolean;
    }
}

if (!('isMultipleOf' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isMultipleOf', {
        value: function (other: number): boolean {
            return this.valueOf() % other === 0;
        },
        writable: true,
        configurable: true,
    });
}