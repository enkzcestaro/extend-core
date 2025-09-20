export {};

declare global {
    interface Math {
        /**
         * Calculates the average of numbers.
         * 
         * @example
         * Math.average(2, 4, 6); // 4
         *
         * @param nums Numbers to average
         * @returns Average value
         */
        average(...nums: number[]): number;
    }
}

if (!('average' in Math)) {
    Object.defineProperty(Math, 'average', {
        value: function(...nums: number[]): number {
            if (!nums.length) return 0;
            return nums.reduce((a, b) => a + b, 0) / nums.length;
        },
        writable: true,
        configurable: true,
    });
}