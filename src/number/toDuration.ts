export {};

declare global {
    interface Number {
        /**
         * Converts the number of seconds to a compact duration string like "1h 2m 3s".
         *
         * @example
         * (3723).toDuration(); // "1h 2m 3s"
         */
        toDuration(): string;
    }
}

if (!('toDuration' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toDuration', {
        value: function (): string {
            let total = Math.floor(this.valueOf());
            const hours = Math.floor(total / 3600);
            total %= 3600;
            const minutes = Math.floor(total / 60);
            const seconds = total % 60;
            return [
                hours ? `${hours}h` : '',
                minutes ? `${minutes}m` : '',
                seconds ? `${seconds}s` : ''
            ].filter(Boolean).join(' ');
        },
        writable: true,
        configurable: true,
    });
}