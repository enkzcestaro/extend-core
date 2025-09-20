export {};

declare global {
    interface Math {
        /**
         * Multiplies a number by a factor.
         * 
         * @example
         * Math.scale(5, 2); // 10
         * Math.scale(3, 0.5); // 1.5
         *
         * @param n Number to scale
         * @param factor Multiplication factor
         * @returns Scaled number
         */
        scale(n: number, factor: number): number;
    }
}

if (!('scale' in Math)) {
    Object.defineProperty(Math, 'scale', {
        value: function(n: number, factor: number): number {
            return n * factor;
        },
        writable: true,
        configurable: true,
    });
}