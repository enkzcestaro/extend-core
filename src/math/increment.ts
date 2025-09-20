export {};

declare global {
    interface Math {
        /** Increments a number by 1 */
        increment(n: number): number;
    }
}

if (!('increment' in Math)) {
    Object.defineProperty(Math, 'increment', {
        value: (n: number) => n + 1,
        writable: true,
        configurable: true,
    });
}