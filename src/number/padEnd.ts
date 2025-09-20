export {};

declare global {
    interface Number {
        /**
         * Pads the number as a string at the end to the specified length with the given character.
         *
         * @param length Total length of the resulting string
         * @param char Character to pad with (default '-')
         * @example
         * (5).padEnd(3); // "5--"
         */
        padEnd(length: number, char?: string): string;
    }
}

if (!('padEnd' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'padEnd', {
        value: function (length: number, char = '-'): string {
            let str = this.valueOf().toString();
            while (str.length < length) {
                str = str + char;
            }
            return str;
        },
        writable: true,
        configurable: true,
    });
}