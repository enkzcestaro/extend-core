export {};

declare global {
    interface Number {
        /**
         * Checks if the number is a perfect number (sum of divisors excluding itself equals number).
         *
         * @example
         * (6).isPerfect(); // true
         */
        isPerfect(): boolean;
    }
}

if (!('isPerfect' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isPerfect', {
        value: function (): boolean {
            const val = Math.floor(this.valueOf());
            if (val <= 0) return false;
            const divs = (this.valueOf() as number).divisors().filter(d => d !== val);
            return divs.reduce((a, b) => a + b, 0) === val;
        },
        writable: true,
        configurable: true,
    });
}