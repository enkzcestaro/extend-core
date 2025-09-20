export {};

declare global {
    interface Array<T> {
        /**
         * Checks if the array is empty.
         * @returns `true` if the array has no elements, `false` otherwise.
         *
         * @example
         * ```ts
         * [].isEmpty(); // true
         * [1, 2, 3].isEmpty(); // false
         * ```
         */
        isEmpty(): boolean;
    }
}

if (!('isEmpty' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'isEmpty', {
        value: function <T>(this: T[]): boolean {
            return this.length === 0;
        },
        writable: true,
        configurable: true,
    });
};