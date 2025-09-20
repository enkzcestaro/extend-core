export { };

declare global {
    interface String {

        /**
         * Converts string to a floating point number.
         *
         * @example
         * '3.14'.toFloat(); // 3.14
         * '0.001'.toFloat(); // 0.001
         *
         * @returns A floating point number
         */
        toFloat(): number;
    }
}

if (!('toFloat' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toFloat', {
        value: function(this: string): number {
            return parseFloat(this);
        },
        writable: true,
        configurable: true,
    });
}