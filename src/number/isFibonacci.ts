export {};

declare global {
    interface Number {
        /**
         * Checks if the number belongs to the Fibonacci sequence.
         *
         * @example
         * (8).isFibonacci(); // true
         */
        isFibonacci(): boolean;
    }
}

if (!('isFibonacci' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isFibonacci', {
        value: function (): boolean {
            const val = Math.floor(Math.abs(this.valueOf()));
            const isPerfectSquare = (n: number) => {
                const s = Math.sqrt(n);
                return s === Math.floor(s);
            };
            return isPerfectSquare(5 * val * val + 4) || isPerfectSquare(5 * val * val - 4);
        },
        writable: true,
        configurable: true,
    });
}