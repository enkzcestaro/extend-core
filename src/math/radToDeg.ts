export {};

declare global {
    interface Math {
        /**
         * Converts radians to degrees.
         *
         * @param radians Radians
         * @returns Degrees
         *
         * @example
         * Math.radToDeg(Math.PI); // 180
         */
        radToDeg(radians: number): number;
    }
}

if (!('radToDeg' in Math)) {
    Object.defineProperty(Math, 'radToDeg', {
        value: (radians: number) => radians * (180 / Math.PI),
        writable: true,
        configurable: true,
    });
}