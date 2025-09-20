export {};

declare global {
    interface Number {
        /**
         * Converts the number (assumed to be weeks) to days.
         *
         * @example
         * (2).toDaysFromWeeks(); // 14
         */
        toDaysFromWeeks(): number;
    }
}

if (!('toDaysFromWeeks' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toDaysFromWeeks', {
        value: function (): number {
            return this.valueOf() * 7;
        },
        writable: true,
        configurable: true,
    });
}