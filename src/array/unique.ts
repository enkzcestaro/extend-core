export {};

declare global {
    interface Array<T> {
        /**
         * Removes duplicate elements from the array and returns the modified array.
         *
         * @returns The array with unique elements.
         *
         * @example
         * [1,2,2,3,1].unique(); // [1,2,3]
         * [{a:1},{a:1}].unique(item => item.a); // [{a:1}]
         */
        unique(keyFn?: ((item: T) => any)): T[];
    }
}

if (!('unique' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'unique', {
        value: function <T>(this: T[], keyFn?: (item: T) => any): T[] {
            if (!keyFn) {
                return Array.from(new Set(this));
            } else {
                const seen = new Set<any>();
                return this.filter(item => {
                    const key = keyFn(item);
                    if (seen.has(key)) return false;
                    seen.add(key);
                    return true;
                });
            }
        },
        writable: true,
        configurable: true,
    });
};