export {};

declare global {
    interface Function {
        /**
         * Ensures the function is only called once.
         *
         * @returns A new function
         *
         * @example
         * const init = () => console.log('Init');
         * const runOnce = init.once();
         * runOnce(); // "Init"
         * runOnce(); // does nothing
         */
        once<T extends any[], R>(this: (...args: T) => R): (...args: T) => R | undefined;
    }
}

if (!('once' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'once', {
        value: function<T extends any[], R>(this: (...args: T) => R) {
            let called = false;
            let result: R;
            const original = this;
            return function(...args: T) {
                if (!called) {
                    called = true;
                    result = original(...args);
                    return result;
                }
                return undefined;
            };
        },
        writable: true,
        configurable: true,
    });
}
