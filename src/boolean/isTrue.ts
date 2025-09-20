export {};

declare global {
    interface Boolean {
        /**
         * Checks if the value is exactly true.
         *
         * @example
         * (true).isTrue();  // true
         * (false).isTrue(); // false
         */
        isTrue(): boolean;
    }
}

if (!('isTrue' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'isTrue', {
        value: function(this: boolean): boolean {
            return this === true;
        },
        writable: true,
        configurable: true,
    });
}