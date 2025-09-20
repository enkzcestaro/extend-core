export {};

declare global {
    interface String {
        /**
         * Removes all non-alphanumeric characters (symbols) from the string.
         *
         * @returns String without symbols
         *
         * @example
         * 'a!b@c#'.stripSymbols(); // 'abc'
         */
        stripSymbols(): string;
    }
}

if (!('stripSymbols' in String.prototype)) {
    Object.defineProperty(String.prototype, 'stripSymbols', {
        value: function(this: string): string {
            return this.replace(/[^a-zA-Z0-9\s]/g, '');
        },
        writable: true,
        configurable: true,
    });
}