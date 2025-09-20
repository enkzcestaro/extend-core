export {};

declare global {
    interface Math {
        /**
         * Converts a number to hexadecimal string.
         * @param n Number to convert
         * @returns Hex string
         * @example
         * Math.toHex(255); // "ff"
         */
        toHex(n: number): string;
    }
}

if (!('toHex' in Math)) {
    Object.defineProperty(Math, 'toHex', {
        value: (n: number) => n.toString(16),
        writable: true,
        configurable: true,
    });
}