export {};

declare global {
    interface Function {
        /**
         * Makes a function cancellable via a `cancel` method.
         *
         * @returns A new function with a `cancel` property
         *
         * @example
         * const log = () => console.log('Hi');
         * const fn = log.cancellable();
         * fn();
         * fn.cancel();
         */
        cancellable<T extends any[]>(this: (...args: T) => any): ((...args: T) => void) & { cancel: () => void };
    }
}

if (!('cancellable' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'cancellable', {
        value: function<T extends any[]>(this: (...args: T) => any) {
            let cancelled = false;
            const original = this;
            const wrapper = function(...args: T) {
                if (!cancelled) {
                    original(...args);
                }
            } as ((...args: T) => void) & { cancel: () => void };
            wrapper.cancel = () => { cancelled = true; };
            return wrapper;
        },
        writable: true,
        configurable: true,
    });
}