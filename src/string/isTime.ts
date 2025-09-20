export { };

declare global {
    interface String {
        /**
         * Checks if string is a valid time (HH:mm:ss).
         */
        isTime(): boolean;
    }
}

if (!('isTime' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isTime', {
        value: function(this: string): boolean {
            return /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/.test(this.trim());
        },
        writable: true,
        configurable: true,
    });
}