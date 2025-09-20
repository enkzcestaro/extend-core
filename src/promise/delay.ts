export {};

declare global {
    interface Promise<T> {
        /**
         * Delays the resolution of the promise by given milliseconds.
         *
         * @param ms Milliseconds to delay
         * @returns A promise that resolves after the delay
         *
         * @example
         * Promise.resolve(42).delay(1000).then(console.log); // logs 42 after 1s
         */
        delay(ms: number): Promise<T>;
    }
}

if (!('delay' in Promise.prototype)) {
    Object.defineProperty(Promise.prototype, 'delay', {
        value: async function<T>(this: Promise<T>, ms: number): Promise<T> {
            return this.then(value => new Promise<T>(resolve => setTimeout(() => resolve(value), ms)));
        },
        writable: true,
        configurable: true,
    });
}