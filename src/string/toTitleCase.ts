export {};

declare global {
    interface String {
        /**
         * Converts string to Title Case (first letter of each word uppercase).
         *
         * @returns A title-cased string
         *
         * @example
         * 'hello world'.toTitleCase(); // 'Hello World'
         */
        toTitleCase(): string;
    }
}

if (!('toTitleCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toTitleCase', {
        value: function(this: string): string {
            return this.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
        },
        writable: true,
        configurable: true,
    });
}