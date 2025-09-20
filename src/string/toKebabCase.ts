export {};

declare global {
    interface String {
        /**
         * Converts string to kebab-case.
         *
         * @returns A kebab-cased string
         *
         * @example
         * 'fooBar'.toKebabCase(); // 'foo-bar'
         * 'HelloWorld'.toKebabCase(); // 'hello-world'
         */
        toKebabCase(): string;
    }
}

if (!('toKebabCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toKebabCase', {
        value: function(this: string): string {
            return this.replace(/([A-Z])/g, '-$1')
                       .toLowerCase()
                       .replace(/^-/, '');
        },
        writable: true,
        configurable: true,
    });
}