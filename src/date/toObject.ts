export {};

declare global {
    interface Date {
        /**
         * Returns the date as an object: { year, month, day, hour, minute, second, millisecond }
         *
         * @example
         * new Date('2025-09-17T12:34:56.789Z').toObject();
         * // { year: 2025, month: 9, day: 17, hour: 12, minute: 34, second: 56, millisecond: 789 }
         *
         * @returns Object of date components
         */
        toObject(): {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            second: number;
            millisecond: number;
        };
    }
}

if (!('toObject' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'toObject', {
        value: function(this: Date) {
            return {
                year: this.getFullYear(),
                month: this.getMonth() + 1,
                day: this.getDate(),
                hour: this.getHours(),
                minute: this.getMinutes(),
                second: this.getSeconds(),
                millisecond: this.getMilliseconds(),
            };
        },
        writable: true,
        configurable: true,
    });
}