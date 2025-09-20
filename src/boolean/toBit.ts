export {};

declare global {
    interface Boolean {
        /**
         * Converts boolean to bit string ("1" or "0").
         *
         * @example
         * (true).toBit();  // "1"
         * (false).toBit(); // "0"
         */
        toBit(): string;
    }
}

if (!('toBit' in Boolean.prototype)) {
    Object.defineProperty(Boolean.prototype, 'toBit', {
        value: function(this: boolean): string {
            return this ? "1" : "0";
        },
        writable: true,
        configurable: true,
    });
}