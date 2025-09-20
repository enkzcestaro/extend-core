export {};

declare global {
    interface Number {
        /**
         * Returns the median of this number and optionally other numbers.
         *
         * @example
         * (5).median(10, 15); // 10
         */
        median(...others: number[]): number;
    }
}

if (!('median' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'median', {
        value: function (...others: number[]): number {
            const numbers = [this.valueOf(), ...others].sort((a, b) => a - b);
            const mid = Math.floor(numbers.length / 2);
            return numbers.length % 2 === 0
                ? (numbers[mid - 1] + numbers[mid]) / 2
                : numbers[mid];
        },
        writable: true,
        configurable: true,
    });
}