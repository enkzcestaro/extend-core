export {};

declare global {
    interface File {
        /**
         * Returns the size of the File in megabytes.
         *
         * @returns Size in MB
         *
         * @example
         * const file = new File(["Hello"], "hello.txt");
         * console.log(file.sizeInMB()); // ~0.000005 MB
         */
        sizeInMB(): number;
    }

    interface Blob {
        /**
         * Returns the size of the Blob in megabytes.
         *
         * @returns Size in MB
         *
         * @example
         * const blob = new Blob(["Hello"]);
         * console.log(blob.sizeInMB()); // ~0.000005 MB
         */
        sizeInMB(): number;
    }
}

if (!('sizeInMB' in File.prototype)) {
    Object.defineProperty(File.prototype, 'sizeInMB', {
        value: function(this: File): number {
            return this.size / (1024 * 1024);
        },
        writable: true,
        configurable: true,
    });
}

if (!('sizeInMB' in Blob.prototype)) {
    Object.defineProperty(Blob.prototype, 'sizeInMB', {
        value: function(this: Blob): number {
            return this.size / (1024 * 1024);
        },
        writable: true,
        configurable: true,
    });
}