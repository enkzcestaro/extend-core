export {};

declare global {
    interface String {
        /**
         * Converts string to number.
         *
         * @param fallback Value to return if conversion fails (default: NaN)
         * @returns Number value or fallback
         *
         * @example
         * '123'.toNumber();     // 123
         * 'abc'.toNumber(0);    // 0
         */
        toNumber(fallback?: number): number;
    }
}

if (!('toNumber' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toNumber', {
        value: function(this: string, fallback: number = NaN): number {
            const n = Number(this);
            return isNaN(n) ? fallback : n;
        },
        writable: true,
        configurable: true,
    });
}