export {};

declare global {
    interface String {
        /**
         * Checks if the string is an anagram of another string.
         *
         * @param other The string to compare with
         * @returns true if anagram, false otherwise
         *
         * @example
         * 'listen'.isAnagramOf('silent'); // true
         * 'hello'.isAnagramOf('world');   // false
         */
        isAnagramOf(other: string): boolean;
    }
}

if (!('isAnagramOf' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isAnagramOf', {
        value: function(this: string, other: string): boolean {
            const normalize = (str: string) =>
                str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
            return normalize(this) === normalize(other);
        },
        writable: true,
        configurable: true,
    });
}