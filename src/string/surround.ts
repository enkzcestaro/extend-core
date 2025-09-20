export {};

declare global {
    interface String {
        /**
         * Surrounds the string with the given character on both sides.
         *
         * @param char Character to surround with
         * @returns Surrounded string
         *
         * @example
         * 'abc'.surround('*'); // '*abc*'
         */
        surround(char: string): string;
    }
}

if (!('surround' in String.prototype)) {
    Object.defineProperty(String.prototype, 'surround', {
        value: function(this: string, char: string): string {
            return char + this + char;
        },
        writable: true,
        configurable: true,
    });
}