export {};

declare global {
    interface String {
        /**
         * Checks if the string is a valid octal number (digits 0-7).
         *
         * @returns true if octal, false otherwise
         *
         * @example
         * '127'.isOctal(); // true
         * '128'.isOctal(); // false
         */
        isOctal(): boolean;
    }
}

if (!('isOctal' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isOctal', {
        value: function(this: string): boolean {
            return /^[0-7]+$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}