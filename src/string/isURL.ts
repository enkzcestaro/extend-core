export {};

declare global {
    interface String {
        /**
         * Checks if the string is a valid URL.
         *
         * @returns true if valid URL, false otherwise
         *
         * @example
         * 'https://example.com'.isUrl(); // true
         * 'not a url'.isUrl();           // false
         */
        isURL(): boolean;
    }
}

if (!('isURL' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isUrl', {
        value: function(this: string): boolean {
            try {
                new URL(this);
                return true;
            } catch {
                return false;
            }
        },
        writable: true,
        configurable: true,
    });
}