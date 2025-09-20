export {};

declare global {
    interface Date {
        /**
         * Creates a clone of this date object.
         *
         * @returns New Date object with the same time
         *
         * @example
         * const d1 = new Date('2025-09-17');
         * const d2 = d1.clone();
         * d1 === d2; // false
         */
        clone(): Date;
    }
}

if (!('clone' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'clone', {
        value: function(this: Date): Date {
            return new Date(this.getTime());
        },
        writable: true,
        configurable: true,
    });
}