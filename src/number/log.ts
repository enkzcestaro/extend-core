export {};

declare global {
    interface Number {
        /**
         * Returns the natural logarithm or logarithm to the specified base.
         *
         * @param base Optional base (default e)
         * @example
         * (10).log(); // Math.log(10)
         * (8).log(2); // 3
         */
        log(base?: number): number;
    }
}

if (!('log' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'log', {
        value: function (base?: number): number {
            const val = this.valueOf();
            if (base === undefined) return Math.log(val);
            return Math.log(val) / Math.log(base);
        },
        writable: true,
        configurable: true,
    });
}