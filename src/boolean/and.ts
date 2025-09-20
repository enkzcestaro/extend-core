export {};

declare global {
    interface Boolean {
        /**
         * Performs AND operation with another boolean.
         *
         * @example
         * (true).and(true);   // true
         * (true).and(false);  // false
         */
        and(other: boolean): boolean;
    }
}

if (!('and' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'and', {
        value: function(this: boolean, other: boolean): boolean {
            return this && other;
        },
        writable: true,
        configurable: true,
    });
}