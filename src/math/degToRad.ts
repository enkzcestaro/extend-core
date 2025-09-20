export {};

declare global {
    interface Math {
        /**
         * Converts degrees to radians.
         *
         * @param degrees Degrees
         * @returns Radians
         *
         * @example
         * Math.degToRad(180); // 3.14159...
         */
        degToRad(degrees: number): number;
    }
}

if (!('degToRad' in Math)) {
    Object.defineProperty(Math, 'degToRad', {
        value: (degrees: number) => degrees * (Math.PI / 180),
        writable: true,
        configurable: true,
    });
}