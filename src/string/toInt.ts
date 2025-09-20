export { };

declare global {
    interface String {

        /**
         * Converts string to an integer.
         *
         * @param radix The base to use for conversion (default is 10).
         * @returns The integer representation of the string.
         *
         * @example
         * '42'.toInt(); // 42
         * '1010'.toInt(2); // 10
         */
        toInt(radix?: number): number;
    }
}

if (!('toInt' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toInt', {
        value: function(this: string, radix: number = 10): number {
            return parseInt(this, radix);
        },
        writable: true,
        configurable: true,
    });
}