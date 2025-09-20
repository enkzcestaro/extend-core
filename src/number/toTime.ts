export {};

declare global {
    interface Number {
        /**
         * Converts number of seconds to HH:MM:SS format.
         *
         * @example
         * (3661).toTime(); // "01:01:01"
         */
        toTime(): string;
    }
}

if (!('toTime' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toTime', {
        value: function (): string {
            const total = Math.floor(this.valueOf());
            const hours = Math.floor(total / 3600);
            const minutes = Math.floor((total % 3600) / 60);
            const seconds = total % 60;
            return [hours, minutes, seconds].map(n => n.toString().padStart(2, '0')).join(':');
        },
        writable: true,
        configurable: true,
    });
}