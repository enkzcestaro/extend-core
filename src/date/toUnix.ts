export {};

declare global {
    interface Date {
        /**
         * Returns Unix timestamp in seconds.
         *
         * @returns Unix timestamp (seconds)
         *
         * @example
         * const d = new Date('1970-01-01T00:00:01Z');
         * d.toUnix(); // 1
         */
        toUnix(): number;
    }
}

if (!('toUnix' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'toUnix', {
        value: function(this: Date): number {
            return Math.floor(this.getTime() / 1000);
        },
        writable: true,
        configurable: true,
    });
}