export {};

declare global {
    interface Buffer {
        /**
         * Converts Buffer to Base64 string.
         *
         * @returns Base64 string
         *
         * @example
         * const buf = Buffer.from('hello');
         * buf.toBase64(); // "aGVsbG8="
         */
        toBase64(): string;
    }
}

if (!('toBase64' in Buffer.prototype)) {
    Object.defineProperty(Buffer.prototype, 'toBase64', {
        value: function(this: Buffer): string {
            return this.toString('base64');
        },
        writable: true,
        configurable: true,
    });
}