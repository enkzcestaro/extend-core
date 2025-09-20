export {};

declare global {
    interface FunctionConstructor {
        /**
         * Composes multiple functions from right to left.
         *
         * @example
         * const double = (x: number) => x*2;
         * const increment = (x: number) => x+1;
         * const fn = Function.compose(double, increment);
         * fn(3); // double(increment(3)) => 8
         */
        compose<T extends Array<(...args: any[]) => any>>(this: (...args: any[]) => any, ...fns: T): (...args: Parameters<T[number]>) => any;
    }
}

if (!('compose' in Function)) {
    Object.defineProperty(Function, 'compose', {
        value: function(...fns: Function[]) {
            return (...args: any[]) => fns.reduceRight((acc, fn) => [fn(...(Array.isArray(acc) ? acc : [acc]))], args)[0];
        },
        writable: true,
        configurable: true,
    });
};
