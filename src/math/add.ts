export {};

declare global {
    interface Math {
        /** Adds two numbers */
        add(a: number, b: number): number;
    }
}

if (!('add' in Math)) {
    Object.defineProperty(Math, 'add', {
        value: (a: number, b: number) => a + b,
        writable: true,
        configurable: true,
    });
}