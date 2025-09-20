export {};

declare global {
    interface Number {
        /**
         * Increments the number by 1 or by an optional step.
         *
         * @param step Step to increment (default 1)
         * @example
         * (5).increment(); // 6
         * (5).increment(2); // 7
         */
        increment(step?: number): number;
    }
}

if (!('increment' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'increment', {
        value: function (step = 1): number {
            return this.valueOf() + step;
        },
        writable: true,
        configurable: true,
    });
}