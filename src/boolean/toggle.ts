export {};

declare global {
    interface Boolean {
        /**
         * Toggles the boolean value.
         *
         * @example
         * (true).toggle();  // false
         * (false).toggle(); // true
         */
        toggle(): boolean;
    }
}

if (!('toggle' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'toggle', {
        value: function(this: boolean): boolean {
            return !this;
        },
        writable: true,
        configurable: true,
    });
}