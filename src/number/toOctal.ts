export {};

declare global {
    interface Number {
        /**
         * Converts the number to an octal string.
         *
         * @example
         * (10).toOctal(); // "12"
         */
        toOctal(): string;
    }
}

if (!('toOctal' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toOctal', {
        value: function (): string {
            return this.valueOf().toString(8);
        },
        writable: true,
        configurable: true,
    });
}