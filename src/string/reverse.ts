export {};

declare global {
    interface String {
        /**
         * Returns the reversed string.
         *
         * @returns A new string reversed
         *
         * @example
         * 'hello'.reverse(); // 'olleh'
         */
        reverse(): string;
    }
}

if (!('reverse' in String.prototype)) {
    Object.defineProperty(String.prototype, 'reverse', {
        value: function(this: string): string {
            return this.split('').reverse().join('');
        },
        writable: true,
        configurable: true,
    });
}