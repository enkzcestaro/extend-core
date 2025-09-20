export {};

declare global {
    interface Boolean {
        /**
         * Performs OR operation with another boolean.
         *
         * @example
         * (true).or(false);   // true
         * (false).or(false);  // false
         */
        or(other: boolean): boolean;
    }
}

if (!('or' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'or', {
        value: function(this: boolean, other: boolean): boolean {
            return this || other;
        },
        writable: true,
        configurable: true,
    });
}