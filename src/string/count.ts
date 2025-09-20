export {};

declare global {
    interface String {
        /**
         * Counts how many times the given substring occurs in the string.
         *
         * @param substr Substring to count
         * @returns Number of occurrences
         *
         * @example
         * 'ababab'.count('ab'); // 3
         */
        count(substr: string): number;
    }
}

if (!('count' in String.prototype)) {
    Object.defineProperty(String.prototype, 'count', {
        value: function(this: string, substr: string): number {
            if (!substr) return 0;
            return this.split(substr).length - 1;
        },
        writable: true,
        configurable: true,
    });
}