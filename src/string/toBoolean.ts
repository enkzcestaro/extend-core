export {};

declare global {
    interface String {
        /**
         * Converts string to boolean.
         * Returns true for 'true' (case-insensitive), false for 'false'.
         * If string is neither 'true' nor 'false', returns the optional fallback or undefined.
         *
         * @param fallback Optional fallback boolean value
         * @returns boolean or fallback/undefined
         *
         * @example
         * 'true'.toBoolean();      // true
         * 'FALSE'.toBoolean();     // false
         * 'yes'.toBoolean();       // undefined
         * 'yes'.toBoolean(true);   // true
         */
        toBoolean(fallback?: boolean): boolean | undefined;
    }
}

if (!('toBoolean' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toBoolean', {
        value: function(this: string, fallback?: boolean): boolean | undefined {
            const val = this.toLowerCase();
            if (val === 'true') return true;
            if (val === 'false') return false;
            return fallback;
        },
        writable: true,
        configurable: true,
    });
}