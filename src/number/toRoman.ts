export {};

declare global {
    interface Number {
        /**
         * Converts the number to a Roman numeral.
         *
         * @example
         * (9).toRoman(); // "IX"
         */
        toRoman(): string;
    }
}

if (!('toRoman' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toRoman', {
        value: function (): string {
           var n = Math.floor(this.valueOf());
           if (n <= 0 || n >= 4000) return '';
            const roman: [number, string][] = [
                [1000, 'M'],
                [900, 'CM'],
                [500, 'D'],
                [400, 'CD'],
                [100, 'C'],
                [90, 'XC'],
                [50, 'L'],
                [40, 'XL'],
                [10, 'X'],
                [9, 'IX'],
                [5, 'V'],
                [4, 'IV'],
                [1, 'I'],
            ];
            let result = '';
            for (const [value, symbol] of roman) {
                while (n >= value) {
                    result += symbol;
                    n -= value;
                }
            }
            return result;
        },
        writable: true,
        configurable: true,
    });
}
