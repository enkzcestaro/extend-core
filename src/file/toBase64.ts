// File.prototype.toBase64
export {};

declare global {
    interface File {
        /**
         * Converts a File or Blob to a Base64 string.
         *
         * @returns A promise that resolves to the Base64 string
         *
         * @example
         * const base64 = await file.toBase64();
         */
        toBase64(): Promise<string>;
    }

    interface Blob {
        /**
         * Converts a File or Blob to a Base64 string.
         *
         * @returns A promise that resolves to the Base64 string
         *
         * @example
         * const base64 = await blob.toBase64();
         */
        toBase64(): Promise<string>;
    }
}

if (!('toBase64' in File.prototype)) {
    Object.defineProperty(File.prototype, 'toBase64', {
        value: function(this: File): Promise<string> {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result as string);
                reader.onerror = reject;
                reader.readAsDataURL(this);
            });
        },
        writable: true,
        configurable: true,
    });
}

if (!('toBase64' in Blob.prototype)) {
    Object.defineProperty(Blob.prototype, 'toBase64', {
        value: function(this: Blob): Promise<string> {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result as string);
                reader.onerror = reject;
                reader.readAsDataURL(this);
            });
        },
        writable: true,
        configurable: true,
    });
}
