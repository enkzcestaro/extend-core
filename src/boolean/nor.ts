export {};

declare global {
    interface Boolean {
        /**
         * Performs NOR operation with another boolean.
         * Equivalent to NOT (this OR other).
         *
         * @example
         * (false).nor(false); // true
         * (true).nor(false);  // false
         */
        nor(other: boolean): boolean;
    }
}

if (!('nor' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'nor', {
        value: function(this: boolean, other: boolean): boolean {
            return !(this || other);
        },
        writable: true,
        configurable: true,
    });
};