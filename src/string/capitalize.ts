export {};

declare global {
    interface String {
        /**
         * Capitalizes only the first letter of the string.
         *
         * @returns A string with the first letter capitalized
         *
         * @example
         * 'hello'.capitalize(); // 'Hello'
         */
        capitalize(): string;
    }
}

if (!('capitalize' in String.prototype)) {
    Object.defineProperty(String.prototype, 'capitalize', {
        value: function(this: string): string {
            return this.charAt(0).toUpperCase() + this.slice(1);
        },
        writable: true,
        configurable: true,
    });
}