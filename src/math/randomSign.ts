export { };

declare global {
    interface Math {
        /**
         * Returns a random sign, either -1 or 1.
         *
         * @example
         * Math.randomSign(); // -1
         * Math.randomSign(); // 1
         *
         * @returns -1 or 1 randomly
         */
        randomSign(): number;
    }
}

if (!('randomSign' in Math)) {
    Object.defineProperty(Math, 'randomSign', {
        value: function (): number {
            return Math.random() < 0.5 ? -1 : 1;
        },
        writable: true,
        configurable: true,
    });
}