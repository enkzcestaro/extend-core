export {};

declare global {
    interface Number {
        /**
         * Converts the number of bytes to human-readable format (KB, MB, GB, TB).
         *
         * @example
         * (1048576).toFileSize(); // "1 MB"
         */
        toFileSize(): string;
    }
}

if (!('toFileSize' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toFileSize', {
        value: function (): string {
            const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
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