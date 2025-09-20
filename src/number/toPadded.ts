export {};

declare global {
    interface Number {
        /**
         * Converts the number to a string with a fixed width (pad with zeros).
         *
         * @param width Total width of the string
         * @example
         * (5).toPadded(3); // "005"
         */
        toPadded(width: number): string;
    }
}

if (!('toPadded' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toPadded', {
        value: function (width: number): string {
            return this.valueOf().toString().padStart(width, '0');
        },
        writable: true,
        configurable: true,
    });
}