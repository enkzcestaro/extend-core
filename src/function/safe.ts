export {};

declare global {
    interface Function {
        /**
         * Wraps a function to prevent it from throwing errors.
         * Returns the function's return type, or undefined if an error occurs.
         *
         * @returns Wrapped function with same parameters and return type | undefined
         *
         * @example
         * const risky = (x: number) => { if (x < 0) throw new Error(); return x * 2; };
         * const safeFn = risky.safe();
         * safeFn(5);  // 10
         * safeFn(-3); // undefined
         */
        safe<T extends any[], R>(this: (...args: T) => R): (...args: T) => R | undefined;
    }
}

if (!('safe' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'safe', {
        value: function<T extends any[], R>(this: (...args: T) => R): (...args: T) => R | undefined {
            const fn = this;
            return function(...args: T): R | undefined {
                try {
                    return fn(...args);
                } catch {
                    return undefined;
                }
            };
        },
        writable: true,
        configurable: true,
    });
};