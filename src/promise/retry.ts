export {};

declare global {
    interface Promise<T> {
        /**
         * Retries the promise a number of times if it rejects.
         *
         * @param times Number of attempts
         * @param delayMs Optional delay between retries
         * @returns A promise that retries on failure
         */
        retry(times: number, delayMs?: number): Promise<T>;
    }
}

if (!('retry' in Promise.prototype)) {
    Object.defineProperty(Promise.prototype, 'retry', {
        value: function<T>(this: Promise<T>, times: number, delayMs = 0): Promise<T> {
            const attempt = async(promise: Promise<T>, retriesLeft: number): Promise<T> => {
                return promise.catch((err: any) => {
                    if (retriesLeft <= 0) throw err;
                    return new Promise<T>(resolve => setTimeout(resolve, delayMs)).then(() => attempt(this, retriesLeft - 1));
                });
            };
            return attempt(this, times);
        },
        writable: true,
        configurable: true,
    });
}