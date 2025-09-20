export {};

declare global {
    interface Math {
        /**
         * Clamps a number between min and max.
         *
         * @param value The number to clamp
         * @param min Minimum value
         * @param max Maximum value
         * @returns Clamped number
         *
         * @example
         * Math.clamp(10, 0, 5); // 5
         * Math.clamp(-2, 0, 5); // 0
         */
        clamp(value: number, min: number, max: number): number;
    }
}

if (!('clamp' in Math)) {
    Object.defineProperty(Math, 'clamp', {
        value: (value: number, min: number, max: number) => Math.min(Math.max(value, min), max),
        writable: true,
        configurable: true,
    });
}