export { };

declare global {
    interface String {
        
        /**
         * Converts string to an array of characters.
         *
         * @example
         * 'hello'.toArray(); // ['h', 'e', 'l', 'l', 'o']
         * ''.toArray(); // []
         *
         * @returns An array of characters
         */
        toArray(): string[];
    }
}

if (!('toArray' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toArray', {
        value: function(this: string): string[] {
            return this.split('');
        },
        writable: true,
        configurable: true,
    });
}