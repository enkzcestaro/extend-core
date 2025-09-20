export {};

declare global {
    interface Math {
        /** Subtracts second number from first */
        subtract(a: number, b: number): number;
    }
}

if (!('subtract' in Math)) {
    Object.defineProperty(Math, 'subtract', {
        value: (a: number, b: number) => a - b,
        writable: true,
        configurable: true,
    });
}