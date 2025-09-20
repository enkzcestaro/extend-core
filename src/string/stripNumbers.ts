export {};

declare global {
    interface String {
        /**
         * Removes all numeric characters from the string.
         *
         * @returns String without numbers
         *
         * @example
         * 'a1b2c3'.stripNumbers(); // 'abc'
         */
        stripNumbers(): string;
    }
}

if (!('stripNumbers' in String.prototype)) {
    Object.defineProperty(String.prototype, 'stripNumbers', {
        value: function(this: string): string {
            return this.replace(/[0-9]/g, '');
        },
        writable: true,
        configurable: true,
    });
}