export {};

declare global {
    interface Number {
        /**
         * Executes a function n times.
         *
         * @param fn Function with index argument
         * @example
         * (3).times(i => console.log(i)); // 0 1 2
         */
        times(fn: (i: number) => void): void;
    }
}

if (!('times' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'times', {
        value: function (fn: (i: number) => void): void {
            for (let i = 0; i < this.valueOf(); i++) fn(i);
        },
        writable: true,
        configurable: true,
    });
}