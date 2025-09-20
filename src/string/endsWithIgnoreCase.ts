export {};

declare global {
    interface String {
        /**
         * Checks if the string ends with the given substring (case-insensitive).
         *
         * @param substr Substring to check
         * @returns true if string ends with substring, false otherwise
         *
         * @example
         * 'Hello World'.endsWithIgnoreCase('WORLD'); // true
         */
        endsWithIgnoreCase(substr: string): boolean;
    }
}

if (!('endsWithIgnoreCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'endsWithIgnoreCase', {
        value: function(this: string, substr: string): boolean {
            return this.toLowerCase().endsWith(substr.toLowerCase());
        },
        writable: true,
        configurable: true,
    });
}