export {};

declare global {
    interface Array<T> {
        /**
         * Sorts the array by key, function, or fallback to the item itself.
         *
         * @param key Optional key string (path) or function to sort by. Function gets (item, index, array)
         * @param order 'asc' | 'desc' | 1 | -1 (default: 'asc')
         * @returns The sorted array (in-place)
         *
         * @example
         * [3,1,2].sortBy(); // [1,2,3]
         * [{a:2},{a:1}].sortBy('a'); // [{a:1},{a:2}]
         * [{a:2},{a:1}].sortBy('a','desc'); // [{a:2},{a:1}]
         * [{x:2},{x:1}].sortBy((item,i,array) => item.x + i, -1); // [{x:2},{x:1}]
         */
        sortBy(
            key?: string | ((item: T, index: number, array: T[]) => any),
            order?: 'asc' | 'desc' | 1 | -1
        ): T[];
    }
}

function getValueByPath(obj: any, path: string) {
    const parts = path.replace(/^\$\./, '').split('.');
    let current = obj;
    for (const part of parts) {
        if (current == null) return undefined;
        current = current[part];
    }
    return current;
}

if (!('sortBy' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'sortBy', {
        value: function <T>(
            this: T[],
            key?: string | ((item: T, index: number, array: T[]) => any),
            order: 'asc' | 'desc' | 1 | -1 = 'asc'
        ): T[] {
            const multiplier = order === 'desc' || order === -1 ? -1 : 1;

            const compare = (a: T, b: T, iA: number, iB: number): number => {
                let valA: any = a;
                let valB: any = b;

                if (key !== undefined) {
                    if (typeof key === 'function') {
                        valA = (key as (item: T, index: number, array: T[]) => any)(a, iA, this);
                        valB = (key as (item: T, index: number, array: T[]) => any)(b, iB, this);
                    } else if (typeof key === 'string') {
                        valA = getValueByPath(a, key);
                        valB = getValueByPath(b, key);
                    }
                }

                if (valA == valB) return 0;
                return (valA > valB ? 1 : -1) * multiplier;
            };

            return this.sort((a, b, iA = 0, iB = 0) => compare(a, b, iA, iB));
        },
        writable: true,
        configurable: true,
    });
};