export {};

declare global {
    interface Math {
        /** Decrements a number by 1 */
        decrement(n: number): number;
    }
}

if (!('decrement' in Math)) {
    Object.defineProperty(Math, 'decrement', {
        value: (n: number) => n - 1,
        writable: true,
        configurable: true,
    });
}