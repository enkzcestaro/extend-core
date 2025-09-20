export {};

declare global {
    interface Promise<T> {
        /**
         * Runs a side-effect function when the promise resolves,
         * without modifying the resolved value.
         *
         * @param fn Function to run with the resolved value
         * @returns The same promise, unchanged
         *
         * @example
         * Promise.resolve(42)
         *   .tap(value => console.log(value)) // logs 42
         *   .then(value => console.log(value)); // 42
         */
        tap(fn: (value: T) => void): Promise<T>;
    }
}

if (!('tap' in Promise.prototype)) {
    Object.defineProperty(Promise.prototype, 'tap', {
        value: async function<T>(this: Promise<T>, fn: (value: T) => void): Promise<T> {
            return this.then(value => {
                fn(value);
                return value;
            });
        },
        writable: true,
        configurable: true,
    });
}