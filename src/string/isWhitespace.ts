export { };

declare global {
    interface String {
        /**
         * Checks if string contains only whitespace.
         */
        isWhitespace(): boolean;
    }
}

if (!('isWhitespace' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isWhitespace', {
        value: function(this: string): boolean {
            return /^\s*$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}