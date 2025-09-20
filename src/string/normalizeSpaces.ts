export {};

declare global {
    interface String {
        /**
         * Replaces multiple consecutive whitespace characters with a single space.
         *
         * @returns Normalized string
         *
         * @example
         * 'a   b  c'.normalizeSpaces(); // 'a b c'
         */
        normalizeSpaces(): string;
    }
}

if (!('normalizeSpaces' in String.prototype)) {
    Object.defineProperty(String.prototype, 'normalizeSpaces', {
        value: function(this: string): string {
            return this.replace(/\s+/g, ' ').trim();
        },
        writable: true,
        configurable: true,
    });
}