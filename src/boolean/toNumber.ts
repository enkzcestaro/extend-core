export {};

declare global {
    interface Boolean {
        /**
         * Converts boolean to number (true → 1, false → 0).
         *
         * @example
         * (true).toNumber();  // 1
         * (false).toNumber(); // 0
         */
        toNumber(): number;
    }
}

if (!('toNumber' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'toNumber', {
        value: function(this: boolean): number {
            return this ? 1 : 0;
        },
        writable: true,
        configurable: true,
    });
}