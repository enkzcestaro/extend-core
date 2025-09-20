export {};

declare global {
    interface Array<T> {
        /**
         * Flattens nested arrays recursively (infinite depth).
         *
         * @returns A new fully flattened array
         *
         * @example
         * [1, [2, [3, [4]]]].flattenDeep(); // [1, 2, 3, 4]
         */
        flattenDeep(): any[];
    }
}

if (!('flattenDeep' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'flattenDeep', {
        value: function <T>(this: T[]): any[] {
            const flattenHelper = (arr: any[]): any[] => {
                const result: any[] = [];
                for (const item of arr) {
                    if (Array.isArray(item)) {
                        result.push(...flattenHelper(item));
                    } else {
                        result.push(item);
                    }
                }
                return result;
            };
            return flattenHelper(this);
        },
        writable: true,
        configurable: true,
    });
};