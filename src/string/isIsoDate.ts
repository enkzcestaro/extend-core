export { };

declare global {
    interface String {
        /**
         * Checks if string is a valid ISO 8601 date.
         */
        isIsoDate(): boolean;
    }
}

if (!('isIsoDate' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isIsoDate', {
        value: function(this: string): boolean {
            return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(this.trim());
        },
        writable: true,
        configurable: true,
    });
}