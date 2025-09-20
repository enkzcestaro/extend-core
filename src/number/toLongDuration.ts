export {};

declare global {
    interface Number {
        /**
         * Converts the number of milliseconds to "X days Y hours Z minutes" format.
         *
         * @example
         * (90061000).toLongDuration(); // "1 days 1 hours 1 minutes"
         */
        toLongDuration(): string;
    }
}

if (!('toLongDuration' in Number.prototype)) {
    Object.defineProperty(Number.prototype, 'toLongDuration', {
        value: function (): string {
            let totalMs = Math.floor(this.valueOf());
            const days = Math.floor(totalMs / (24 * 3600000));
            totalMs %= 24 * 3600000;
            const hours = Math.floor(totalMs / 3600000);
            totalMs %= 3600000;
            const minutes = Math.floor(totalMs / 60000);
            return [
                days ? `${days} days` : '',
                hours ? `${hours} hours` : '',
                minutes ? `${minutes} minutes` : ''
            ].filter(Boolean).join(' ');
        },
        writable: true,
        configurable: true,
    });
}