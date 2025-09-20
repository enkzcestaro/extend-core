export {};

declare global {
    interface Number {
        /**
         * Converts the number to a binary string.
         *
         * @example
         * (10).toBinary(); // "1010"
         */
        toBinary(): string;
    }
}

if (!('toBinary' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toBinary', {
        value: function (): string {
            return this.valueOf().toString(2);
        },
        writable: true,
        configurable: true,
    });
}