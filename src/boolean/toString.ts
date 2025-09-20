export {};

declare global {
    interface Boolean {
        /**
         * Converts boolean to string ('true' or 'false').
         *
         * @example
         * (true).toString();  // "true"
         * (false).toString(); // "false"
         */
        toString(): string;
    }
}

if (!('toString' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'toString', {
        value: function(this: boolean): string {
            return this ? "true" : "false";
        },
        writable: true,
        configurable: true,
    });
}