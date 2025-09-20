export {};

declare global {
    interface String {
        /**
         * Returns the last word of the string.
         *
         * @returns The last word or empty string if none
         *
         * @example
         * 'Hello world!'.lastWord(); // 'world!'
         * ''.lastWord(); // ''
         */
        lastWord(): string;
    }
}

if (!('lastWord' in String.prototype)) {
    Object.defineProperty(String.prototype, 'lastWord', {
        value: function(this: string): string {
            const match = this.trim().match(/\S+$/);
            return match ? match[0] : '';
        },
        writable: true,
        configurable: true,
    });
}