export {};

declare global {
    interface Number {
        /**
         * Rounds the number to the specified number of decimal places.
         *
         * @param decimals Number of decimal places (default 0)
         * @example
         * (3.14159).round(2); // 3.14
         * (3.14159).round(); // 3
         */
        round(decimals?: number): number;
    }
}

if (!('round' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'round', {
        value: function (decimals = 0): number {
            const factor = Math.pow(10, decimals);
            return Math.round(this.valueOf() * factor) / factor;
        },
        writable: true,
        configurable: true,
    });
}