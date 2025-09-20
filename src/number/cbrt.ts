export {};

declare global {
    interface Number {
        /**
         * Returns the cube root of the number.
         *
         * @example
         * (27).cbrt(); // 3
         */
        cbrt(): number;
    }
}

if (!('cbrt' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'cbrt', {
        value: function (): number {
            return Math.cbrt(this.valueOf());
        },
        writable: true,
        configurable: true,
    });
}