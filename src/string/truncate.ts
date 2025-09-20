export {};

declare global {
    interface String {
        /**
         * Truncates the string to a specified length and appends `endString` if truncated.
         *
         * @param length Maximum length of the string
         * @param endString String to append if truncated (default: '...')
         * @returns A truncated string
         *
         * @example
         * 'Hello world'.truncate(5); // 'Hello...'
         * 'Hello'.truncate(10); // 'Hello'
         */
        truncate(length: number, endString?: string): string;
    }
}

if (!('truncate' in String.prototype)) {
    Object.defineProperty(String.prototype, 'truncate', {
        value: function(this: string, length: number, endString: string = '...'): string {
            return this.length > length ? this.slice(0, length) + endString : this.toString();
        },
        writable: true,
        configurable: true,
    });
};

''