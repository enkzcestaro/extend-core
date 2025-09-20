export {};

declare global {
    interface Number {
        /**
         * Clamps the number between a minimum and maximum.
         *
         * @param min Minimum allowed value
         * @param max Maximum allowed value
         * @returns The clamped number
         *
         * @example
         * (15).clamp(0, 10); // 10
         * (-5).clamp(0, 10); // 0
         * (5).clamp(0, 10);  // 5
         */
        clamp(min: number, max: number): number;
    }
}

if (!('clamp' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'clamp', {
        value: function (min: number, max: number): number {
            return Math.min(Math.max(this.valueOf(), min), max);
        },
        writable: true,
        configurable: true,
    });
}