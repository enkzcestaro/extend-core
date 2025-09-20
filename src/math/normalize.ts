export { };

declare global {
    interface Math {
        /**
         * Normalizes a value to [0,1] based on min/max.
         *
         * @example
         * Math.normalize(5,0,10); // 0.5
         *
         * @param value Value to normalize
         * @param min Minimum
         * @param max Maximum
         * @returns Normalized value
         */
        normalize(value: number, min: number, max: number): number;
    }
}

if (!('normalize' in Math)) {
    Object.defineProperty(Math, 'normalize', {
        value: function (value: number, min: number, max: number): number {
            return (value - min) / (max - min);
        },
        writable: true,
        configurable: true,
    });
}