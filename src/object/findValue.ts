export {};

declare global {
    interface ObjectConstructor {
        /**
         * Finds the first value that satisfies the predicate function.
         * 
         * @param obj Object to search
         * @param fn Predicate function (value, key) => boolean
         * @returns The first value that matches, or undefined
         * 
         * @example
         * Object.findValue({ a:1, b:2 }, v => v > 1); // 2
         */
        findValue(obj: Record<string, any>, fn: (value: any, key: string) => boolean): any;
    }
}

if (!('findValue' in Object.prototype)) {
    Object.defineProperty(Object, 'findValue', {
        value: function (obj: Record<string, any>, fn: (value: any, key: string) => boolean): any {
            for (const [key, value] of Object.entries(obj)) {
                if (fn(value, key)) return value;
            }
            return undefined;
        },
        writable: true,
        configurable: true,
    });
}