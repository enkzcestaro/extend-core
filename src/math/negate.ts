export {};

declare global {
    interface Math {
        /** Negates a number */
        negate(n: number): number;
    }
}

if (!('negate' in Math)) {
    Object.defineProperty(Math, 'negate', {
        value: (n: number) => -n,
        writable: true,
        configurable: true,
    });
}