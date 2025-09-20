export {};

declare global {
    interface String {
        /**
         * Pads the string on both sides to reach the given length.
         *
         * @param length Total length after padding
         * @param char Character to pad with (default: ' ')
         * @returns Padded string
         *
         * @example
         * 'abc'.padBoth(7,'-'); // '--abc--'
         */
        padBoth(length: number, char?: string): string;
    }
}

if (!('padBoth' in String.prototype)) {
    Object.defineProperty(String.prototype, 'padBoth', {
        value: function(this: string, length: number, char: string = ' '): string {
            const totalPad = Math.max(length - this.length, 0);
            const leftPad = Math.floor(totalPad / 2);
            const rightPad = totalPad - leftPad;
            return char.repeat(leftPad) + this + char.repeat(rightPad);
        },
        writable: true,
        configurable: true,
    });
}