export {};

declare global {
    interface String {
        /**
         * Returns the first word of the string.
         *
         * @returns The first word or empty string if none
         *
         * @example
         * 'Hello world!'.firstWord(); // 'Hello'
         * ''.firstWord(); // ''
         */
        firstWord(): string;
    }
}

if (!('firstWord' in String.prototype)) {
    Object.defineProperty(String.prototype, 'firstWord', {
        value: function(this: string): string {
            const match = this.trim().match(/^\S+/);
            return match ? match[0] : '';
        },
        writable: true,
        configurable: true,
    });
}