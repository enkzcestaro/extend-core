export {};

declare global {
    interface Buffer {
        /**
         * Converts ArrayBuffer to Uint8Array.
         *
         * @returns Uint8Array view of the buffer
         *
         * @example
         * const buf = new ArrayBuffer(4);
         * const arr = buf.toUint8Array(); // Uint8Array(4) [0,0,0,0]
         */
        toUint8Array(): Uint8Array;
    }
}

if (!('toUint8Array' in Buffer.prototype)) {
    Object.defineProperty(ArrayBuffer.prototype, 'toUint8Array', {
        value: function(this: ArrayBuffer): Uint8Array {
            return new Uint8Array(this);
        },
        writable: true,
        configurable: true,
    });
}