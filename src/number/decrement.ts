export {};

declare global {
    interface Number {
        /**
         * Decrements the number by 1 or by an optional step.
         *
         * @param step Step to decrement (default 1)
         * @example
         * (5).decrement(); // 4
         * (5).decrement(2); // 3
         */
        decrement(step?: number): number;
    }
}

if (!('decrement' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'decrement', {
        value: function (step = 1): number {
            return this.valueOf() - step;
        },
        writable: true,
        configurable: true,
    });
}