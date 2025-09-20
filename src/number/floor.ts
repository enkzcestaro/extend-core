export {};

declare global {
    interface Number {
        /**
         * Floors the number (rounds down to nearest integer).
         *
         * @example
         * (3.99).floor(); // 3
         */
        floor(): number;
    }
}

if (!('floor' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'floor', {
        value: function (): number {
            return Math.floor(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}