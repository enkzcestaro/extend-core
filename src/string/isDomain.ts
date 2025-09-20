export { };

declare global {
    interface String {
        /**
         * Checks if string is a valid domain.
         */
        isDomain(): boolean;
    }
}

if (!('isDomain' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isDomain', {
        value: function(this: string): boolean {
            return /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.[A-Za-z]{2,6}$/.test(this.trim());
        },
        writable: true,
        configurable: true,
    });
}