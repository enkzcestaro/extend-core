// safeStringify
export {};

declare global {
    interface JSON {
        /**
         * Safely stringifies a value.
         * Returns undefined if stringification fails.
         *
         * @param value Any value
         * @param space Optional spacing for pretty print
         * @returns JSON string or undefined
         *
         * @example
         * JSON.safeStringify({a:1}); // '{"a":1}'
         * JSON.safeStringify(() => {}); // undefined
         */
        safeStringify(value: any, space?: string | number): string | undefined;
    }
}

if (!('safeStringify' in JSON)) {
    Object.defineProperty(JSON, 'safeStringify', {
        value: function(value: any, space?: string | number): string | undefined {
            try {
                return JSON.stringify(value, undefined, space);
            } catch {
                return undefined;
            }
        },
        writable: true,
        configurable: true,
    });
}