export {};

declare global {
    interface Math {
        /**
         * Checks if a number is prime.
         * @param n Number to check
         * @returns True if n is prime
         * @example
         * Math.isPrime(7); // true
         * Math.isPrime(4); // false
         */
        isPrime(n: number): boolean;
    }
}

if (!('isPrime' in Math)) {
    Object.defineProperty(Math, 'isPrime', {
        value: (n: number) => {
            if (n <= 1) return false;
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