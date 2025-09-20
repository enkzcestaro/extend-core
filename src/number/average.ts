export {};

declare global {
    interface Number {
        /**
         * Returns the average of this number and optionally other numbers.
         *
         * @example
         * (5).average(10, 15); // (5+10+15)/3 = 10
         */
        average(...others: number[]): number;
    }
}

if (!('average' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'average', {
        value: function (...others: number[]): number {
            const numbers = [this.valueOf(), ...others];
            const sum = numbers.reduce((a, b) => a + b, 0);
            return sum / numbers.length;
        },
        writable: true,
        configurable: true,
    });
}