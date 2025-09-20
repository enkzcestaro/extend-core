export {};

declare global {
    interface String {
        /**
         * Checks if the string is valid Base64.
         *
         * @returns true if Base64, false otherwise
         *
         * @example
         * 'SGVsbG8='.isBase64(); // true
         * 'Hello'.isBase64();    // false
         */
        isBase64(): boolean;
    }
}

if (!('isBase64' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isBase64', {
        value: function(this: string): boolean {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}