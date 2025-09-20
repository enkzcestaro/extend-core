export {};

declare global {
    interface Number {
        /**
         * Converts degrees to radians.
         *
         * @returns The number in radians
         *
         * @example
         * (180).toRadian(); // ~3.14159
         */
        toRadian(): number;
    }
}

if (!('toRadian' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toRadian', {
        value: function (): number {
            return (this.valueOf() * Math.PI) / 180;
        },
        writable: true,
        configurable: true,
    });
}