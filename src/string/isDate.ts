export { };

declare global {
    interface String {
        /**
         * Checks if string is a valid date format (YYYY-MM-DD or DD/MM/YYYY).
         */
        isDate(): boolean;
    }
}

if (!('isDate' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isDate', {
        value: function(this: string): boolean {
            return /^\d{4}-\d{2}-\d{2}$/.test(this.trim()) || /^\d{2}\/\d{2}\/\d{4}$/.test(this.trim());
        },
        writable: true,
        configurable: true,
    });
}