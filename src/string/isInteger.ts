export {};

declare global {
    interface String {
        /**
         * Checks if the string is a valid integer.
         * @example
         * '123'.isInteger(); // true
         * '12.3'.isInteger(); // false
         */
        isInteger(): boolean;
    }
}

if (!('isInteger' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isInteger', {
        value: function(this: string): boolean {
            return /^-?\d+$/.test(this.trim());
        },
        writable: true,
        configurable: true,
    });
}