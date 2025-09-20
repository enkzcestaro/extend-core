export {};

declare global {
    interface Function {
        /**
         * Pipes functions from left to right.
         *
         * @example
         * const add = (a: number) => a + 1;
         * const double = (a: number) => a * 2;
         * const piped = add.pipe(double);
         * piped(2); // double(add(2)) = 6
         */
        pipe<Args extends any[], R>(
            ...fns: [(...args: Args) => any, ...Array<(...args: any[]) => any>]
        ): (...args: Args) => any;
    }
}

if (!('pipe' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'pipe', {
        value: function (...fns: Function[]) {
            return (...args: any[]) => fns.reduce((acc, fn) => [fn(...(Array.isArray(acc) ? acc : [acc]))], args)[0];
        },
        writable: true,
        configurable: true,
    });
}