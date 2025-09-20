export {};

declare global {
    interface Math {
        /**
         * Converts a number to binary string.
         * @param n Number to convert
         * @returns Binary string
         * @example
         * Math.toBinary(10); // "1010"
         */
        toBinary(n: number): string;
    }
}

if (!('toBinary' in Math)) {
    Object.defineProperty(Math, 'toBinary', {
        value: (n: number) => n.toString(2),
        writable: true,
        configurable: true,
    });
}