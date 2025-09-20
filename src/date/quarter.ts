export {};

declare global {
    interface Date {
        /**
         * Returns the quarter of the year (1-4).
         *
         * @returns Quarter number
         *
         * @example
         * const d = new Date('2025-05-10');
         * d.quarter(); // 2
         */
        quarter(): number;
    }
}

if (!('quarter' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'quarter', {
        value: function(this: Date): number {
            return Math.floor(this.getMonth() / 3) + 1;
        },
        writable: true,
        configurable: true,
    });
}