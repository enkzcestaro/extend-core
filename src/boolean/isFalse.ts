export {};

declare global {
    interface Boolean {
        /**
         * Checks if the value is exactly false.
         *
         * @example
         * (true).isFalse();  // false
         * (false).isFalse(); // true
         */
        isFalse(): boolean;
    }
}

if (!('isFalse' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'isFalse', {
        value: function(this: boolean): boolean {
            return this === false;
        },
        writable: true,
        configurable: true,
    });
}