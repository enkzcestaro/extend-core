export {};

declare global {
    interface Number {
        /**
         * Checks if the number is odd.
         *
         * @returns true if odd, false otherwise
         *
         * @example
         * (3).isOdd(); // true
         * (6).isOdd(); // false
         */
        isOdd(): boolean;
    }
}

if (!('isOdd' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isOdd', {
        value: function (): boolean {
            return Math.abs(this.valueOf() % 2) === 1;
        },
        writable: true,
        configurable: true,
    });
}