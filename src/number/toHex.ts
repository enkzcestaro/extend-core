export {};

declare global {
    interface Number {
        /**
         * Converts the number to a hexadecimal string.
         *
         * @example
         * (255).toHex(); // "FF"
         */
        toHex(): string;
    }
}

if (!('toHex' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toHex', {
        value: function (): string {
            return this.valueOf().toString(16).toUpperCase();
        },
        writable: true,
        configurable: true,
    });
}