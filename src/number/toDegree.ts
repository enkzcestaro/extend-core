export {};

declare global {
    interface Number {
        /**
         * Converts radians to degrees.
         *
         * @returns The number in degrees
         *
         * @example
         * (Math.PI).toDegree(); // 180
         */
        toDegree(): number;
    }
}

if (!('toDegree' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toDegree', {
        value: function (): number {
            return (this.valueOf() * 180) / Math.PI;
        },
        writable: true,
        configurable: true,
    });
}