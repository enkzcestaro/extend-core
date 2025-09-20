export {};

declare global {
    interface Number {
        /**
         * Checks if the number is Infinity or -Infinity.
         *
         * @example
         * (Infinity).isInfinity(); // true
         * (-Infinity).isInfinity(); // true
         * (5).isInfinity(); // false
         */
        isInfinity(): boolean;
    }
}

if (!('isInfinity' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isInfinity', {
        value: function (): boolean {
            const val = this.valueOf();
            return val === Infinity || val === -Infinity;
        },
        writable: true,
        configurable: true,
    });
}