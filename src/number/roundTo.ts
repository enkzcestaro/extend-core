export {};

declare global {
    interface Number {
        /**
         * Rounds the number to the given number of decimal places.
         *
         * @param decimals Number of decimal places
         * @returns Rounded number
         *
         * @example
         * (3.14159).roundTo(2); // 3.14
         */
        roundTo(decimals: number): number;
    }
}

if (!('roundTo' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'roundTo', {
        value: function (decimals: number): number {
            const factor = Math.pow(10, decimals);
            return Math.round(this.valueOf() * factor) / factor;
        },
        writable: true,
        configurable: true,
    });
}