export {};

declare global {
    interface Math {
        /** Multiplies two numbers */
        multiply(a: number, b: number): number;
    }
}

if (!('multiply' in Math)) {
    Object.defineProperty(Math, 'multiply', {
        value: (a: number, b: number) => a * b,
        writable: true,
        configurable: true,
    });
}