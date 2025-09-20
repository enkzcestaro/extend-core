export {};

declare global {
    interface Boolean {
        /**
         * Performs XOR operation with another boolean.
         *
         * @example
         * (true).xor(false);  // true
         * (true).xor(true);   // false
         */
        xor(other: boolean): boolean;
    }
}

if (!('xor' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'xor', {
        value: function(this: boolean, other: boolean): boolean {
            return this !== other;
        },
        writable: true,
        configurable: true,
    });
}