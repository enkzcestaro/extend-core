export {};

declare global {
    interface String {
        /**
         * Checks if the string contains the given substring, case-insensitive.
         *
         * @param substr Substring to search
         * @returns true if found, false otherwise
         *
         * @example
         * 'Hello World'.includesIgnoreCase('hello'); // true
         */
        includesIgnoreCase(substr: string): boolean;
    }
}

if (!('includesIgnoreCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'includesIgnoreCase', {
        value: function(this: string, substr: string): boolean {
            return this.toLowerCase().includes(substr.toLowerCase());
        },
        writable: true,
        configurable: true,
    });
}