export {};

declare global {
    interface Boolean {
        /**
         * Performs NAND operation with another boolean.
         * Equivalent to NOT (this AND other).
         *
         * @example
         * (true).nand(true);   // false
         * (true).nand(false);  // true
         */
        nand(other: boolean): boolean;
    }
}

if (!('nand' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'nand', {
        value: function(this: boolean, other: boolean): boolean {
            return !(this && other);
        },
        writable: true,
        configurable: true,
    });
}