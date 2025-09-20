export {};

declare global {
    interface Array<T> {
        /**
         * Zips the current array with one or more arrays.
         *
         * @param arrays Other arrays to zip with
         * @returns An array of arrays grouped by index
         *
         * @example
         * [1,2,3].zip(['a','b','c']); // [[1,'a'], [2,'b'], [3,'c']]
         * [1,2].zip(['a','b','c'], ['x','y']); // [[1,'a','x'], [2,'b','y'], [undefined,'c',undefined]]
         */
        zip(...arrays: any[][]): any[][];
    }
}

if (!('zip' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'zip', {
        value: function <T>(this: T[], ...arrays: any[][]): any[][] {
            const maxLength = Math.max(this.length, ...arrays.map(a => a.length));
            const result: any[][] = [];

            for (let i = 0; i < maxLength; i++) {
                const group = [this[i], ...arrays.map(a => a[i])];
                result.push(group);
            }

            return result;
        },
        writable: true,
        configurable: true,
    });
};