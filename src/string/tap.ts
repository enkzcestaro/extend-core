export {};

declare global {
    interface String {
        /**
         * Calls the given function with the string for side-effects (logging/debugging) and returns the original string.
         *
         * @param fn Function to call with the string
         * @returns Original string
         *
         * @example
         * 'hello'.tap(console.log); // logs 'hello', returns 'hello'
         */
        tap(fn: (value: string) => void): string;
    }
}

if (!('tap' in String.prototype)) {
    Object.defineProperty(String.prototype, 'tap', {
        value: function(this: string, fn: (value: string) => void): string {
            fn(this);
            return this;
        },
        writable: true,
        configurable: true,
    });
}