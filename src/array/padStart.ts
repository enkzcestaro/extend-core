export {};

declare global {
    interface Array<T> {
        /**
         * Pads the array at the start with the specified value until it reaches the given length.
         *
         * @param length Target length of the array
         * @param value Value to pad with
         * @returns A new padded array
         *
         * @example
         * [1,2].padStart(4, 0); // [0,0,1,2]
         */
        padStart(length: number, value: T): T[];
    }
}

if (!('padStart' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'padStart', {
        value: function <T>(this: T[], length: number, value: T): T[] {
            const toAdd = Math.max(0, length - this.length);
            return Array(toAdd).fill(value).concat(this);
        },
        writable: true,
        configurable: true,
    });
};