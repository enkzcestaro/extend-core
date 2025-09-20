export {};

declare global {
    interface String {
        /**
         * Checks if the string starts with the given substring (case-insensitive).
         *
         * @param substr Substring to check
         * @returns true if string starts with substring, false otherwise
         *
         * @example
         * 'Hello World'.startsWithIgnoreCase('hello'); // true
         */
        startsWithIgnoreCase(substr: string): boolean;
    }
}

if (!('startsWithIgnoreCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'startsWithIgnoreCase', {
        value: function(this: string, substr: string): boolean {
            return this.toLowerCase().startsWith(substr.toLowerCase());
        },
        writable: true,
        configurable: true,
    });
}