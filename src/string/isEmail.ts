export {};

declare global {
    interface String {
        /**
         * Checks if the string is a valid email.
         *
         * @returns true if valid email, false otherwise
         *
         * @example
         * 'user@example.com'.isEmail(); // true
         * 'user@com'.isEmail();         // false
         */
        isEmail(): boolean;
    }
}

if (!('isEmail' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isEmail', {
        value: function(this: string): boolean {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}