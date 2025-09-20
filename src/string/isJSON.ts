export {};

declare global {
    interface String {
        /**
         * Checks if the string is a valid JSON string.
         *
         * @returns true if valid JSON, false otherwise
         *
         * @example
         * '{"a":1}'.isJson(); // true
         * 'not json'.isJson(); // false
         */
        isJSON(): boolean;
    }
}

if (!('isJSON' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isJson', {
        value: function(this: string): boolean {
            try {
                JSON.parse(this);
                return true;
            } catch {
                return false;
            }
        },
        writable: true,
        configurable: true,
    });
}