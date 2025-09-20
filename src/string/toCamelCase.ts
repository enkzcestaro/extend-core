export {};

declare global {
    interface String {
        /**
         * Converts string to camelCase.
         *
         * @returns A camelCased string
         *
         * @example
         * 'foo_bar'.toCamelCase(); // 'fooBar'
         * 'hello-world'.toCamelCase(); // 'helloWorld'
         */
        toCamelCase(): string;
    }
}

if (!('toCamelCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toCamelCase', {
        value: function(this: string): string {
            return this.toLowerCase()
                .replace(/[-_ ]+(\w)/g, (_, c) => c.toUpperCase());
        },
        writable: true,
        configurable: true,
    });
}