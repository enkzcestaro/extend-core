export {};

declare global {
    interface String {
        /**
         * Converts Unicode characters to ASCII equivalents.
         *
         * @returns ASCII string
         *
         * @example
         * 'café'.toAscii(); // 'cafe'
         */
        toAscii(): string;
    }
}

if (!('toAscii' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toAscii', {
        value: function(this: string): string {
            return this.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        },
        writable: true,
        configurable: true,
    });
}