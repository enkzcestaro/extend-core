export {};

declare global {
    interface Array<T> {
        /**
         * Returns the mode(s) of all numeric elements in the array.
         * Non-number elements are ignored.
         *
         * @returns An array of the most frequent number(s), or an empty array if no numbers.
         *
         * @example
         * ```ts
         * [1, 2, 2, 3].mode(); // [2]
         * [1, 1, 2, 2, 3].mode(); // [1, 2]
         * [1].mode(); // [1]
         * [].mode(); // []
         * ```
         */
        mode(this: T extends number ? number[] : never): number[];
    }
};

if (!('mode' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'mode', {
        value: function <T>(this: T[]): number[] {
            const numbers = this.filter((v) => typeof v === 'number');
            if (numbers.length === 0) return [];

            const freqMap = new Map<number, number>();
            numbers.forEach(num => freqMap.set(num, (freqMap.get(num) || 0) + 1));

            let maxFreq = 0;
            freqMap.forEach(count => {
                if (count > maxFreq) maxFreq = count;
            });

            const modes: number[] = [];
            freqMap.forEach((count, num) => {
                if (count === maxFreq) modes.push(num);
            });

            return modes;
        },
        writable: true,
        configurable: true,
    });
};