// safeParse
export {};

declare global {
    interface JSON {
        /**
         * Safely parses a JSON string.
         * Returns undefined if parsing fails.
         *
         * @param text JSON string
         * @returns Parsed object or undefined
         *
         * @example
         * JSON.safeParse('{"a":1}'); // { a: 1 }
         * JSON.safeParse('invalid'); // undefined
         * 
         * // Generic type example
         * interface User { id: number; name: string; }
         * const user = JSON.safeParse<User>('{"id":1,"name":"Alice"}');
         * if (user) {
         *   console.log(user.id); // 1
         * }
         */
        safeParse<T = any>(text: string): T | undefined;
    }
}

if (!('safeParse' in JSON)) {
    Object.defineProperty(JSON, 'safeParse', {
        value: function<T = any>(text: string): T | undefined {
            try {
                return JSON.parse(text) as T;
            } catch {
                return undefined;
            }
        },
        writable: true,
        configurable: true,
    });
}