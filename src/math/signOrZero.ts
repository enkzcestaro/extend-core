export { };

declare global {
    interface Math {
        /**
         * Returns the sign of a number, or 0 if the value is 0.
         *
         * @example
         * Math.signOrZero(-5); // -1
         * Math.signOrZero(10); // 1
         * Math.signOrZero(0);  // 0
         *
         * @param value Number to check
         * @returns -1, 0, or 1
         */
        signOrZero(value: number): -1 | 0 | 1;
    }
}

if (!('signOrZero' in Math)) {
    Object.defineProperty(Math, 'signOrZero', {
        value: function (value: number): -1 | 0 | 1 {
            return value > 0 ? 1 : value < 0 ? -1 : 0;
        },
        writable: true,
        configurable: true,
    });
}