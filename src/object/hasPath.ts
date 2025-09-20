export {};

declare global {
    interface ObjectConstructor {
        /**
         * Checks if a nested path exists in an object using dot notation.
         * 
         * @param obj The object to check
         * @param path Dot-separated path string (e.g., 'a.b.c')
         * @returns True if path exists, false otherwise
         * 
         * @example
         * Object.hasPath({ a: { b: 1 } }, 'a.b'); // true
         * Object.hasPath({ a: { b: 1 } }, 'a.c'); // false
         */
        hasPath(obj: Record<string, any>, path: string): boolean;
    }
}

if (!('hasPath' in Object.prototype)) {
    Object.defineProperty(Object, 'hasPath', {
        value: function (obj: Record<string, any>, path: string): boolean {
            const keys = path.split('.');
            let current: any = obj;
            for (const key of keys) {
                if (current == null || !(key in current)) return false;
                current = current[key];
            }
            return true;
        },
        writable: true,
        configurable: true,
    });
}