export {};

declare global {
    interface Function {
        /**
         * Curries the function.
         *
         * @example
         * const add = (a: number, b: number) => a + b;
         * const curried = add.curry();
         * curried(1)(2); // 3
         */
         curry<T extends (...args: any[]) => any>(this: T): Curried<T>;
    }
}

type Curried<T extends (...args: any[]) => any> =
    T extends (...args: [infer A, ...infer R]) => infer Ret
        ? (arg: A) => Curried<(...args: R) => Ret>
        : T extends () => infer Ret
            ? () => Ret
            : never;

if (!('curry' in Function.prototype)) {
    Object.defineProperty(Function.prototype, 'curry', {
        value: function<T extends (...args: any[]) => any>(this: T) {
            const fn = this;
            return function curried(...args: any[]): any {
                if (args.length >= fn.length) {
                    return fn(...args);
                } else {
                    return (...nextArgs: any[]) => curried(...args, ...nextArgs);
                }
            };
        },
        writable: true,
        configurable: true,
    });
}
