export {};

declare global {
    interface Array<T> {
        /**
         * Rotates the array by the given number of steps.
         *
         * @param steps Number of positions to rotate (positive = right, negative = left)
         * @returns The rotated array (in-place)
         *
         * @example
         * [1,2,3,4].rotate(1); // [4,1,2,3]
         * [1,2,3,4].rotate(-1); // [2,3,4,1]
         */
        rotate(steps: number): T[];
    }
}

if (!('rotate' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'rotate', {
        value: function <T>(this: T[], steps: number): T[] {
            const n = this.length;
            if (n === 0) return this;
            const k = ((steps % n) + n) % n; // normalize steps
            if (k === 0) return this;
            return this.splice(0, n - k).concat(this.splice(0, k));
        },
        writable: true,
        configurable: true,
    });
};