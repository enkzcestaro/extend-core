export {};

declare global {
    interface String {
        /**
         * Converts string to snake_case.
         *
         * @returns A snake_cased string
         *
         * @example
         * 'fooBar'.toSnakeCase(); // 'foo_bar'
         * 'HelloWorld'.toSnakeCase(); // 'hello_world'
         */
        toSnakeCase(): string;
    }
}

if (!('toSnakeCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toSnakeCase', {
        value: function(this: string): string {
            return this.replace(/([A-Z])/g, '_$1')
                       .toLowerCase()
                       .replace(/^_/, '');
        },
        writable: true,
        configurable: true,
    });
}