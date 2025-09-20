export {};

declare global {
    interface String {
        /**
         * Checks if the string is empty.
         *
         * @returns true if string is empty, false otherwise
         *
         * @example
         * ''.isEmpty(); // true
         * 'abc'.isEmpty(); // false
         */
        isEmpty(): boolean;
    }
}

if (!('isEmpty' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isEmpty', {
        value: function(this: string): boolean {
            return this.length === 0;
        },
        writable: true,
        configurable: true,
    });
}