export { };

declare global {
    interface String {

        /**
         * Converts string to PascalCase.
         *
         * @example
         * 'foo_bar'.toPascalCase(); // 'FooBar'
         * 'hello-world'.toPascalCase(); // 'HelloWorld'
         *
         * @returns A PascalCased string
         */
        toPascalCase(): string;
    }
}

if (!('toPascalCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toPascalCase', {
        value: function(this: string): string {
            return this
                .replace(/[-_]+/g, ' ')
                .replace(/\s+/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('');
        },
        writable: true,
        configurable: true,
    });
}