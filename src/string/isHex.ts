export {};

declare global {
    interface String {
        /**
         * Checks if the string is a valid hex color code (#RRGGBB or #RGB).
         *
         * @returns true if valid hex color, false otherwise
         *
         * @example
         * '#fff'.isHex();      // true
         * '#123abc'.isHex();   // true
         * '123'.isHex();       // false
         */
        isHex(): boolean;
    }
}

if (!('isHex' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isHex', {
        value: function(this: string): boolean {
            return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(this);
        },
        writable: true,
        configurable: true,
    });
}