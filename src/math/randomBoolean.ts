export { };

declare global {
    interface Math {
        /**
         * Returns a random boolean value.
         *
         * @example
         * Math.randomBoolean(); // true
         * Math.randomBoolean(); // false
         *
         * @returns Random boolean (true or false)
         */
        randomBoolean(): boolean;
    }
}

if (!('randomBoolean' in Math)) {
    Object.defineProperty(Math, 'randomBoolean', {
        value: function (): boolean {
            return Math.random() < 0.5;
        },
        writable: true,
        configurable: true,
    });
}