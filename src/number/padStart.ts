export {};

declare global {
    interface Number {
        /**
         * Pads the number as a string at the start to the specified length with the given character.
         *
         * @param length Total length of the resulting string
         * @param char Character to pad with (default '-')
         * @example
         * (5).padStart(3); // "--5"
         */
        padStart(length: number, char?: string): string;
    }
}

if (!('padStart' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'padStart', {
        value: function (length: number, char = '-'): string {
            let str = this.valueOf().toString();
            while (str.length < length) {
                str = char + str;
            }
            return str;
        },
        writable: true,
        configurable: true,
    });
}