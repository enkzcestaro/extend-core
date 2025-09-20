export {};

declare global {
    interface String {
        /**
         * Converts each character to its hexadecimal representation.
         *
         * @returns Hex string
         *
         * @example
         * 'ABC'.toHex(); // '414243'
         */
        toHex(): string;
    }
}

if (!('toHex' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toHex', {
        value: function(this: string): string {
            return Array.from(this).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
        },
        writable: true,
        configurable: true,
    });
}