export {};

declare global {
    interface Function {
        /**
         * Caches the results of the function for same arguments.
         *
         * @returns A new memoized function
         *
         * @example
         * const fib = (n: number): number => n <= 1 ? n : fib(n-1)+fib(n-2);
         * const fastFib = fib.memoize();
         */
        memoize<T extends any[], R>(this: (...args: T) => R): (...args: T) => R;
    }
}

if (!('memoize' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'memoize', {
        value: function<T extends any[], R>(this: (...args: T) => R) {
            const cache = new Map<string, R>();
            const original = this;
            return function(...args: T) {
                const key = JSON.stringify(args);
                if (!cache.has(key)) {
                    cache.set(key, original(...args));
                }
                return cache.get(key)!;
            };
        },
        writable: true,
        configurable: true,
    });
}