export {};

declare global {
    interface Number {
        /**
         * Returns the cube of the number.
         *
         * @example
         * (3).cube(); // 27
         */
        cube(): number;
    }
}

if (!('cube' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'cube', {
        value: function (): number {
            return Math.pow(this.valueOf(), 3);
        },
        writable: true,
        configurable: true,
    });
}