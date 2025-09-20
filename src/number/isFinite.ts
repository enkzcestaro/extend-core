export {};

declare global {
    interface Number {
        /**
         * Checks if the number is finite.
         *
         * @example
         * (5).isFinite(); // true
         * (Infinity).isFinite(); // false
         */
        isFinite(): boolean;
    }
}

if (!('isFinite' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isFinite', {
        value: function (): boolean {
            return Number.isFinite(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}