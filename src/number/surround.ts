export {};

declare global {
    interface Number {
        /**
         * Surrounds the number as a string with a character on both sides to reach the specified length.
         *
         * @param length Total length of the resulting string
         * @param char Character to surround with (default '-')
         * @example
         * (5).surround(5); // "--5--"
         */
        surround(length: number, char?: string): string;
    }
}

if (!('surround' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'surround', {
        value: function (length: number, char = '-'): string {
            let str = this.valueOf().toString();
            while (str.length < length) {
                str = char + str + char;
            }
            if (str.length > length) {
                str = str.slice(0, length);
            }
            return str;
        },
        writable: true,
        configurable: true,
    });
}