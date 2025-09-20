export {};

declare global {
    interface Function {
        /**
         * Throttles the function to run at most once every specified milliseconds.
         *
         * @param ms Milliseconds to throttle
         * @returns A new throttled function
         *
         * @example
         * const log = () => console.log('Hi');
         * const throttled = log.throttle(500);
         */
        throttle<T extends any[]>(this: (...args: T) => any, ms: number): (...args: T) => void;
    }
}

if (!('throttle' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'throttle', {
        value: function<T extends any[]>(this: (...args: T) => any, ms: number) {
            let lastCall = 0;
            const original = this;
            return function(...args: T) {
                const now = Date.now();
                if (now - lastCall >= ms) {
                    lastCall = now;
                    original(...args);
                }
            };
        },
        writable: true,
        configurable: true,
    });
}