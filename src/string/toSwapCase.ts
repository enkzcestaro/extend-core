export {};

declare global {
    interface String {
        /**
         * Swaps the case of each character in the string.
         *
         * @returns New string with swapped case
         *
         * @example
         * 'Hello World'.toSwapCase(); // 'hELLO wORLD'
         */
        toSwapCase(): string;
    }
}

if (!('toSwapCase' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toSwapCase', {
        value: function(this: string): string {
            return this.split('').map(c => 
                c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
            ).join('');
        },
        writable: true,
        configurable: true,
    });
}