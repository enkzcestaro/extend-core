export {};

declare global {
    interface Number {
        /**
         * Checks if the number is a perfect square.
         *
         * @example
         * (16).isPerfectSquare(); // true
         * (20).isPerfectSquare(); // false
         */
        isPerfectSquare(): boolean;
    }
}

if (!('isPerfectSquare' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isPerfectSquare', {
        value: function (): boolean {
            const n = this.valueOf();
            return Math.sqrt(n) === Math.floor(Math.sqrt(n));
        },
        writable: true,
        configurable: true,
    });
}