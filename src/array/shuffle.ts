export {};

declare global {
    interface Array<T> {
        /**
         * Randomly shuffles the elements of the array in-place using the Fisher–Yates algorithm.
         * @returns The shuffled array.
         *
         * @example
         * ```ts
         * const arr = [1, 2, 3, 4, 5];
         * arr.shuffle(); // e.g., [3, 5, 1, 4, 2]
         * ```
         */
        shuffle(): T[];
    }
}

if (!('shuffle' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'shuffle', {
        value: function <T>(this: T[]): T[] {
            for (let i = this.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this[i], this[j]] = [this[j], this[i]]; // swap
            }
            return this;
        },
        writable: true,
        configurable: true,
    });
};