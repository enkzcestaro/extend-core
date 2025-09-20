export {};

declare global {
    interface Number {
        /**
         * Checks if the number is even.
         *
         * @returns true if even, false otherwise
         *
         * @example
         * (4).isEven(); // true
         * (5).isEven(); // false
         */
        isEven(): boolean;
    }
}

if (!('isEven' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isEven', {
        value: function (): boolean {
            return this.valueOf() % 2 === 0;
        },
        writable: true,
        configurable: true,
    });
}