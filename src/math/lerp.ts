export {};

declare global {
    interface Math {
        /**
         * Linearly interpolates between a and b by t (0 <= t <= 1).
         *
         * @param a Start value
         * @param b End value
         * @param t Interpolation factor
         * @returns Interpolated value
         *
         * @example
         * Math.lerp(0, 10, 0.5); // 5
         */
        lerp(a: number, b: number, t: number): number;
    }
}

if (!('lerp' in Math)) {
    Object.defineProperty(Math, 'lerp', {
        value: (a: number, b: number, t: number) => a + (b - a) * t,
        writable: true,
        configurable: true,
    });
}