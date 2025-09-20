export {};

declare global {
    interface Promise<T> {
        /**
         * Rejects the promise if it does not settle within the given timeout.
         *
         * @param ms Timeout in milliseconds
         * @param error Optional error to reject with
         * @returns A promise that rejects if timeout expires
         *
         * @example
         * Promise.resolve(42).timeout(1000).then(console.log);
         */
        timeout(ms: number, error?: Error): Promise<T>;
    }
}

if (!('timeout' in Promise.prototype)) {
    Object.defineProperty(Promise.prototype, 'timeout', {
        value: function<T>(this: Promise<T>, ms: number, error?: Error): Promise<T> {
            return Promise.race([
                this,
                new Promise<T>((_, reject) => setTimeout(() => reject(error || new Error('Promise timed out')), ms))
            ]);
        },
        writable: true,
        configurable: true,
    });
}