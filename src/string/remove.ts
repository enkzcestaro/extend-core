export {};

declare global {
    interface String {
        /**
         * Removes all occurrences of a substring from the string.
         *
         * @param substr Substring to remove
         * @returns Modified string
         *
         * @example
         * 'foobarbar'.remove('bar'); // 'foo'
         */
        remove(substr: string): string;
    }
}

if (!('remove' in String.prototype)) {
    Object.defineProperty(String.prototype, 'remove', {
        value: function(this: string, substr: string): string {
            return this.split(substr).join('');
        },
        writable: true,
        configurable: true,
    });
}