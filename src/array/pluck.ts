export {};

declare global {
    interface Array<T> {
        /**
         * Extracts values from objects in the array by key or nested path.
         *
         * @param keyOrPath Key string or path string like 'a.b.c'
         * @returns Array of extracted values
         *
         * @example
         * [{a:1}, {a:2}].pluck('a'); // [1,2]
         * [{a:{b:1}}, {a:{b:2}}].pluck('a.b'); // [1,2]
         */
        pluck(keyOrPath: string): any[];
    }
};

function getValueByPath(obj: any, path: string): any {
    const parts = path.replace(/^\$\./, '').split('.');
    let current = obj;
    for (const part of parts) {
        if (current == null) return undefined;
        current = current[part];
    }
    return current;
}

if (!('pluck' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'pluck', {
        value: function <T>(this: T[], keyOrPath: string): any[] {
            return this.map(item => getValueByPath(item, keyOrPath));
        },
        writable: true,
        configurable: true,
    });
};