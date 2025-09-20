export { };

declare global {
    interface Math {
        /**
         * Returns a random floating-point number between min and max.
         *
         * @example
         * Math.randomFloat(0, 1); // 0.123456
         * Math.randomFloat(5, 10); // 7.8934
         *
         * @param min Minimum value (inclusive)
         * @param max Maximum value (exclusive)
         * @returns Random float number
         */
        randomFloat(min: number, max: number): number;
    }
}

if (!('randomFloat' in Math)) {
    Object.defineProperty(Math, 'randomFloat', {
        value: function(min: number, max: number): number {
            return Math.random() * (max - min) + min;
        },
        writable: true,
        configurable: true,
    });
}