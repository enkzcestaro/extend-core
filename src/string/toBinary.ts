export {};

declare global {
    interface String {
        /**
         * Converts each character to its binary representation.
         *
         * @returns Binary string
         *
         * @example
         * 'A'.toBinary(); // '01000001'
         */
        toBinary(): string;
    }
}

if (!('toBinary' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toBinary', {
        value: function(this: string): string {
            return Array.from(this)
                .map(c => c.charCodeAt(0).toString(2).padStart(8, '0'))
                .join('');
        },
        writable: true,
        configurable: true,
    });
}