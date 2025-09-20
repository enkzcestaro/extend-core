export {};

declare global {
    interface String {
        /**
         * Returns all indices where the substring occurs in the string.
         *
         * @param substr Substring to search
         * @returns Array of indices
         *
         * @example
         * 'ababab'.indexAll('ab'); // [0,2,4]
         */
        indexAll(substr: string): number[];
    }
}

if (!('indexAll' in String.prototype)) {
    Object.defineProperty(String.prototype, 'indexAll', {
        value: function(this: string, substr: string): number[] {
            const indices: number[] = [];
            if (!substr) return indices;
            let index = this.indexOf(substr);
            while (index !== -1) {
                indices.push(index);
                index = this.indexOf(substr, index + 1);
            }
            return indices;
        },
        writable: true,
        configurable: true,
    });
}