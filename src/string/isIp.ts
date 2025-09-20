export { };

declare global {
    interface String {
        /**
         * Checks if string is a valid IPv4 or IPv6 address.
         */
        isIp(): boolean;
    }
}

if (!('isIp' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isIp', {
        value: function(this: string): boolean {
            return /^(?:\d{1,3}\.){3}\d{1,3}$/.test(this.trim()) || /^[a-f0-9:]+$/i.test(this.trim());
        },
        writable: true,
        configurable: true,
    });
}