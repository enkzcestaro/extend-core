export {};

declare global {
    interface String {
        /**
         * Checks if the string contains only 0 and 1 characters.
         *
         * @returns true if binary, false otherwise
         *
         * @example
         * '10101'.isBinary(); // true
         * '10201'.isBinary(); // false
         */
        isBinary(): boolean;
    }
}

if (!('isBinary' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isBinary', {
        value: function(this: string): boolean {
            return /^[01]+$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}