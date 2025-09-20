export {};

declare global {
    interface Array<T> {
        /**
         * Returns the first or last element of the array without modifying it.
         *
         * @param position 'first' | 'last' (default: 'last')
         * @returns The element at the specified position or undefined if empty
         *
         * @example
         * [1,2,3].peek(); // 3
         * [1,2,3].peek('first'); // 1
         */
        peek(position?: 'first' | 'last'): T | undefined;
    }
}

if (!('peek' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'peek', {
        value: function <T>(this: T[], position: 'first' | 'last' = 'last'): T | undefined {
            if (this.length === 0) return undefined;
            return position === 'first' ? this[0] : this[this.length - 1];
        },
        writable: true,
        configurable: true,
    });
};