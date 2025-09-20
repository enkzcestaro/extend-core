export {};

declare global {
    interface String {
        /**
         * Checks if the string contains only whitespace characters.
         *
         * @returns true if only whitespace, false otherwise
         *
         * @example
         * '   '.isBlank(); // true
         * ' a '.isBlank(); // false
         */
        isBlank(): boolean;
    }
}

if (!('isBlank' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isBlank', {
        value: function(this: string): boolean {
            return /^\s*$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}