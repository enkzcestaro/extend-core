export {};

declare global {
    interface Array<T> {
        /**
         * Flattens nested arrays up to the specified depth.
         *
         * @param depth The depth level to flatten (default: 1)
         * @returns A new flattened array
         *
         * @example
         * [1, [2, [3]]].flatten(); // [1, 2, [3]]
         * [1, [2, [3]]].flatten(2); // [1, 2, 3]
         */
        flatten(depth?: number): any[];
    }
}

if (!('flatten' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'flatten', {
        value: function <T>(this: T[], depth: number = 1): any[] {
            const flattenHelper = (arr: any[], d: number): any[] => {
                if (d < 1) return arr.slice();
                const result: any[] = [];
                for (const item of arr) {
                    if (Array.isArray(item)) {
                        result.push(...flattenHelper(item, d - 1));
                    } else {
                        result.push(item);
                    }
                }
                return result;
            };
            return flattenHelper(this, depth);
        },
        writable: true,
        configurable: true,
    });
};