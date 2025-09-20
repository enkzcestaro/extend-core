export {};

declare global {
    interface Math {
        /**
         * Converts a number to Roman numeral string.
         * Supports numbers up to 3999.
         * @param n Number to convert
         * @returns Roman numeral
         * @example
         * Math.toRoman(1990); // "MCMXC"
         */
        toRoman(n: number): string;
    }
}

if (!('toRoman' in Math)) {
    Object.defineProperty(Math, 'toRoman', {
        value: (n: number) => {
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