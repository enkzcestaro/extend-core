export { };

declare global {
    interface String {

        /**
         * Converts string to a Date object. Returns null if the string is not a valid date.
         *
         * @example
         * '2023-01-01'.toDate(); // Date object
         * 'invalid-date'.toDate(); // null
         *
         * @returns A Date object or null
         */
        toDate(): Date | null;
    }
}

if (!('toDate' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toDate', {
        value: function(this: string): Date | null {
            const d = new Date(this);
            return isNaN(d.getTime()) ? null : d;
        },
        writable: true,
        configurable: true,
    });
}