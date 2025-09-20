export {};

declare global {
    interface String {
        /**
         * Checks if the string contains only alphabetic characters.
         *
         * @returns true if string is alphabetic, false otherwise
         *
         * @example
         * 'abc'.isAlpha(); // true
         * 'abc123'.isAlpha(); // false
         */
        isAlpha(): boolean;
    }
}

if (!('isAlpha' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isAlpha', {
        value: function(this: string): boolean {
            return /^[a-zA-Z]+$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}