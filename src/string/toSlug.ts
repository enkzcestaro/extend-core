export {};

declare global {
    interface String {
        /**
         * Converts string to a URL-friendly slug.
         *
         * @returns Slug string
         *
         * @example
         * 'Hello World!'.toSlug(); // 'hello-world'
         */
        toSlug(): string;
    }
}

if (!('toSlug' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toSlug', {
        value: function(this: string): string {
            return this.toAscii()
                .toLowerCase()
                .trim()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
        },
        writable: true,
        configurable: true,
    });
}