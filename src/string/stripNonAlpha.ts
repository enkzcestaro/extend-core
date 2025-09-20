export {};

declare global {
    interface String {
        /**
         * Removes all non-alphabetic characters from the string.
         *
         * @returns Cleaned string
         *
         * @example
         * 'abc123!@#'.stripNonAlpha(); // 'abc'
         */
        stripNonAlpha(): string;
    }
}

if (!('stripNonAlpha' in String.prototype)) {
    Object.defineProperty(String.prototype, 'stripNonAlpha', {
        value: function(this: string): string {
            return this.replace(/[^a-zA-Z]/g, '');
        },
        writable: true,
        configurable: true,
    });
}