export { };

declare global {
    interface Math {
        /**
         * Returns a random integer between min and max (inclusive).
         *
         * @example
         * Math.randomInt(1, 6); // 4
         * Math.randomInt(10, 20); // 15
         *
         * @param min Minimum value (inclusive)
         * @param max Maximum value (inclusive)
         * @returns Random integer number
         */
        randomInt(min: number, max: number): number;
    }
}

if (!('randomInt' in Math)) {
    Object.defineProperty(Math, 'randomInt', {
        value: function(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        writable: true,
        configurable: true,
    });
};
