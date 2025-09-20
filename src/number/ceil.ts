export {};

declare global {
    interface Number {
        /**
         * Ceils the number (rounds up to nearest integer).
         *
         * @example
         * (3.01).ceil(); // 4
         */
        ceil(): number;
    }
}

if (!('ceil' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'ceil', {
        value: function (): number {
            return Math.ceil(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}