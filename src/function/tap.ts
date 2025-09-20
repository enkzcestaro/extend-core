export {};

declare global {
    interface Function {
        /**
         * Runs a side-effect function when this function is called,
         * without modifying the original function's return value.
         *
         * @param fn Function to run with the original result
         * @returns A new function
         *
         * @example
         * const add = (x: number) => x + 1;
         * const wrapped = add.tap(result => console.log(result));
         * wrapped(2); // logs 3, returns 3
         */
        tap<T extends any[], R>(this: (...args: T) => R, fn: (result: R) => void): (...args: T) => R;
    }
}

if (!('tap' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'tap', {
        value: function<T extends any[], R>(this: (...args: T) => R, fn: (result: R) => void) {
            const original = this;
            return function(...args: T) {
                const result = original(...args);
                fn(result);
                return result;
            };
        },
        writable: true,
        configurable: true,
    });
}