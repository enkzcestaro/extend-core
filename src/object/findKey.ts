export {};

declare global {
    interface ObjectConstructor {
        /**
         * Finds the first key that satisfies the predicate function.
         * 
         * @param obj Object to search
         * @param fn Predicate function (value, key) => boolean
         * @returns The first key that matches, or undefined
         * 
         * @example
         * Object.findKey({ a:1, b:2 }, v => v === 2); // 'b'
         */
        findKey(obj: Record<string, any>, fn: (value: any, key: string) => boolean): string | undefined;
    }
}

if (!('findKey' in Object.prototype)) {
    Object.defineProperty(Object, 'findKey', {
        value: function (obj: Record<string, any>, fn: (value: any, key: string) => boolean): string | undefined {
            for (const [key, value] of Object.entries(obj)) {
                if (fn(value, key)) return key;
            }
            return undefined;
        },
        writable: true,
        configurable: true,
    });
}