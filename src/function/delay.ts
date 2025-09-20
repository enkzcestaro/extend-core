export {};

declare global {
    interface Function {
        /**
         * Delays the execution of this function by the specified milliseconds.
         *
         * @param ms Delay in milliseconds
         * @returns A new function returning a Promise
         *
         * @example
         * const sayHi = () => console.log('Hi');
         * sayHi.delay(1000)(); // logs "Hi" after 1 second
         */
        delay<T extends any[]>(this: (...args: T) => any, ms: number): (...args: T) => Promise<any>;
    }
}

if (!('delay' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'delay', {
        value: function<T extends any[]>(this: (...args: T) => any, ms: number) {
            const original = this;
            return async function(...args: T) {
                await new Promise(resolve => setTimeout(resolve, ms));
                return original(...args);
            };
        },
        writable: true,
        configurable: true,
    });
}