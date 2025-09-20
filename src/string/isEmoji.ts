export { };

declare global {
    interface String {
        /**
         * Checks if string contains only emoji.
         */
        isEmoji(): boolean;
    }
}

if (!('isEmoji' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isEmoji', {
        value: function(this: string): boolean {
            return /^[\p{Emoji}\u200d]+$/u.test(this.trim());
        },
        writable: true,
        configurable: true,
    });
}