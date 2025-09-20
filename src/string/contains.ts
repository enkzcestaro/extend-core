export {};

declare global {
    interface String {
        /**
         * Checks if the string contains a given substring.
         *
         * @param substr Substring to search for
         * @returns true if substring is found, false otherwise
         *
         * @example
         * 'hello world'.contains('world'); // true
         */
        contains(substr: string): boolean;
    }
}

if (!('contains' in String.prototype)) {
    Object.defineProperty(String.prototype, 'contains', {
        value: function(this: string, substr: string): boolean {
            return this.indexOf(substr) !== -1;
        },
        writable: true,
        configurable: true,
    });
}