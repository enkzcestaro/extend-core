export {};

declare global {
    interface Array<T> {
        /**
         * Removes all instances of the specified values or those that satisfy the provided predicate functions from the array.
         * Modifies the original array and returns it.
         *
         * @param values - Values to be removed from the array.
         * @param predicates - Predicate functions that determine which elements to remove.
         * @returns The modified array with specified values and elements satisfying predicates removed.
         *
         * @example
         * ```ts
         * const arr = [1, 2, 3, 4, 5, 2];
         * arr.pull(2); // arr is now [1, 3, 4, 5]
         *
         * const arr2 = [1, 2, 3, 4, 5];
         * arr2.pull((n) => n % 2 === 0); // arr2 is now [1, 3, 5]
         *
         * const arr3 = [1, 2, 3, 4, 5];
         * arr3.pull(2, (n) => n > 3); // arr3 is now [1, 3]
         * ```
         */
        pull(...values: (T | ((item: T, index: number, array: T[]) => boolean))[]): T[];
    }
};

if (!('pull' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'pull', {
        value: function <T>(this: T[], ...args: (T | ((item: T, index: number, array: T[]) => boolean))[]): T[] {
            const predicates: ((item: T, index: number, array: T[]) => boolean)[] = [];
            const values: T[] = [];

            for (const arg of args) {
                if (typeof arg === 'function') predicates.push(arg as (item: T, index: number, array: T[]) => boolean);
                else values.push(arg as T);
            }

            for (const value of values) {
                let index: number;
                while ((index = this.indexOf(value)) !== -1) {
                    this.splice(index, 1);
                }
            }

            if (predicates.length) {
                for (let i = this.length - 1; i >= 0; i--) {
                    if (predicates.some(fn => fn(this[i], i, this))) {
                        this.splice(i, 1);
                    }
                }
            }

            return this;
        },
        writable: true,
        configurable: true,
    });
};