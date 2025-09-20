export {};

declare global {
    interface Number {
        /**
         * Adds a given number.
         *
         * @param n Number to add
         * @example
         * (5).add(3); // 8
         */
        add(n: number): number;
    }
}

if (!('add' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'add', {
        value: function (n: number): number {
            return this.valueOf() + n;
        },
        writable: true,
        configurable: true,
    });
}