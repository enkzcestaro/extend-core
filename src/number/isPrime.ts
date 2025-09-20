export {};

declare global {
    interface Number {
        /**
         * Checks if the number is prime.
         *
         * @returns true if prime, false otherwise
         *
         * @example
         * (7).isPrime(); // true
         * (10).isPrime(); // false
         */
        isPrime(): boolean;
    }
}

if (!('isPrime' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'isPrime', {
        value: function (): boolean {
            const n = this.valueOf();
            if (n <= 1 || !Number.isInteger(n)) return false;
            if (n <= 3) return true;
            if (n % 2 === 0 || n % 3 === 0) return false;
            for (let i = 5; i * i <= n; i += 6) {
                if (n % i === 0 || n % (i + 2) === 0) return false;
            }
            return true;
        },
        writable: true,
        configurable: true,
    });
}