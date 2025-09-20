export {};

declare global {
    interface Date {
        /**
         * Formats the date according to the given format string.
         * Supports: YYYY, MM, DD, HH, mm, ss
         *
         * @param fmt Format string
         * @returns Formatted date string
         *
         * @example
         * const d = new Date('2025-09-17T12:30:45');
         * d.format('YYYY-MM-DD'); // "2025-09-17"
         * d.format('DD/MM/YYYY HH:mm'); // "17/09/2025 12:30"
         */
        format(fmt: string): string;
    }
}

if (!('format' in Date.prototype)) {
    Object.defineProperty(Date.prototype, 'format', {
        value: function(this: Date, fmt: string): string {
            const pad = (n: number) => n.toString().padStart(2, '0');
            return fmt.replace(/YYYY|MM|DD|HH|mm|ss/g, token => {
                switch (token) {
                    case 'YYYY': return this.getFullYear().toString();
                    case 'MM': return pad(this.getMonth() + 1);
                    case 'DD': return pad(this.getDate());
                    case 'HH': return pad(this.getHours());
                    case 'mm': return pad(this.getMinutes());
                    case 'ss': return pad(this.getSeconds());
                    default: return token;
                }
            });
        },
        writable: true,
        configurable: true,
    });
}