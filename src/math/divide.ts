export {};

declare global {
    interface Math {
        /** Divides first number by second */
        divide(a: number, b: number): number;
    }
}

if (!('divide' in Math)) {
    Object.defineProperty(Math, 'divide', {
        value: (a: number, b: number) => a / b,
        writable: true,
        configurable: true,
    });
}