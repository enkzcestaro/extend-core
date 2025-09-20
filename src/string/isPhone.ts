export {};

declare global {
    interface String {
        /**
         * Checks if the string is a valid phone number (simple pattern).
         *
         * @returns true if valid phone number, false otherwise
         *
         * @example
         * '+1234567890'.isPhone(); // true
         * 'abc123'.isPhone();      // false
         */
        isPhone(): boolean;
    }
}

if (!('isPhone' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isPhone', {
        value: function(this: string): boolean {
            return /^(\+?\d{1,4}[\s-]?)?(\(?\d{2,4}\)?[\s-]?)?\d{3,4}[\s-]?\d{3,4}$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}