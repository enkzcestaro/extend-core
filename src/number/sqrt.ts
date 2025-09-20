export {};

declare global {
    interface Number {
        /**
         * Returns the square root of the number.
         *
         * @example
         * (9).sqrt(); // 3
         */
        sqrt(): number;
    }
}

if (!('sqrt' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'sqrt', {
        value: function (): number {
            return Math.sqrt(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}