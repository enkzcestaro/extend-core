export {};

declare global {
    interface Function {
        /**
         * Debounces the function by the given milliseconds.
         *
         * @param ms Milliseconds to debounce
         * @returns A new debounced function
         *
         * @example
         * const log = () => console.log('Hi');
         * const debounced = log.debounce(300);
         */
        debounce<T extends any[]>(this: (...args: T) => any, ms: number): (...args: T) => void;
    }
}

if (!('debounce' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'debounce', {
        value: function<T extends any[]>(this: (...args: T) => any, ms: number) {
            let timer: NodeJS.Timeout;
            const original = this;
            return function(...args: T) {
                clearTimeout(timer);
                timer = setTimeout(() => original(...args), ms);
            };
        },
        writable: true,
        configurable: true,
    });
}