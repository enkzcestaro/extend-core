export {};

declare global {
    interface Array<T> {
        /**
         * Executes a function with the array as argument and returns the array itself.
         * Useful for chaining.
         *
         * @param fn Function to execute `(array) => void`
         * @returns The original array
         *
         * @example
         * [1,2,3].tap(arr => console.log(arr)).map(x => x*2);
         */
        tap(fn: (array: T[]) => void): T[];
    }
}

if (!('tap' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'tap', {
        value: function <T>(this: T[], fn: (array: T[]) => void): T[] {
            fn(this);
            return this;
        },
        writable: true,
        configurable: true,
    });
};