export {};

declare global {
    interface Number {
        /**
         * Converts number of bytes to human-readable format with binary units (KiB, MiB, GiB).
         *
         * @example
         * (1048576).toBinaryFileSize(); // "1 MiB"
         */
        toBinaryFileSize(): string;
    }
}

if (!('toBinaryFileSize' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toBinaryFileSize', {
        value: function (): string {
            const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB'];
            let n = this.valueOf();
            let i = 0;
            while (n >= 1024 && i < units.length - 1) {
                n /= 1024;
                i++;
            }
            return n.toFixed(2).replace(/\.00$/, '') + ' ' + units[i];
        },
        writable: true,
        configurable: true,
    });
}