export {};

declare global {
    interface String {
        /**
         * Checks if the string contains only numeric characters.
         *
         * @returns true if string is numeric, false otherwise
         *
         * @example
         * '123'.isNumeric(); // true
         * '123a'.isNumeric(); // false
         */
        isNumeric(): boolean;
    }
}

if (!('isNumeric' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isNumeric', {
        value: function(this: string): boolean {
            return /^[0-9]+$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}