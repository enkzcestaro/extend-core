export {};

declare global {
    interface Date {
        /**
         * Returns Unix timestamp in milliseconds.
         *
         * @returns Unix timestamp (milliseconds)
         *
         * @example
         * const d = new Date('1970-01-01T00:00:01.500Z');
         * d.toMilliseconds(); // 1500
         */
        toMilliseconds(): number;
    }
}

if (!('toMilliseconds' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'toMilliseconds', {
        value: function(this: Date): number {
            return this.getTime();
        },
        writable: true,
        configurable: true,
    });
}