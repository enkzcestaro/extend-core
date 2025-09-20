export {};

declare global {
    interface Date {
        /**
         * Returns the date as an array: [year, month, day, hour, minute, second, millisecond]
         *
         * @example
         * new Date('2025-09-17T12:34:56.789Z').toArray();
         * // [2025, 9, 17, 12, 34, 56, 789]
         *
         * @returns Array of date components
         */
        toArray(): number[];
    }
}

if (!('toArray' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'toArray', {
        value: function(this: Date): number[] {
            return [
                this.getFullYear(),
                this.getMonth() + 1,
                this.getDate(),
                this.getHours(),
                this.getMinutes(),
                this.getSeconds(),
                this.getMilliseconds()
            ];
        },
        writable: true,
        configurable: true,
    });
}