export {};

declare global {
    interface String {
        /**
         * Checks if the string is a valid UUID (v1-v5).
         *
         * @returns true if UUID, false otherwise
         *
         * @example
         * '550e8400-e29b-41d4-a716-446655440000'.isUUID(); // true
         */
        isUUID(): boolean;
    }
}

if (!('isUUID' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isUUID', {
        value: function(this: string): boolean {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(this);
        },
        writable: true,
        configurable: true,
    });
}