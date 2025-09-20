export {};

declare global {
    interface Array<T> {
        /**
         * Pads the array at the end with the specified value until it reaches the given length.
         *
         * @param length Target length of the array
         * @param value Value to pad with
         * @returns A new padded array
         *
         * @example
         * [1,2].padEnd(4, 0); // [1,2,0,0]
         */
        padEnd(length: number, value: T): T[];
    }
}

if (!('padEnd' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'padEnd', {
        value: function <T>(this: T[], length: number, value: T): T[] {
            const toAdd = Math.max(0, length - this.length);
            return this.concat(Array(toAdd).fill(value));
        },
        writable: true,
        configurable: true,
    });
};