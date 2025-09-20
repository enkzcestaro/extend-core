export {};

declare global {
    interface File {
        /**
         * Returns the size of the File in kilobytes.
         *
         * @returns Size in KB
         *
         * @example
         * const file = new File(["Hello"], "hello.txt");
         * console.log(file.sizeInKB()); // ~0.005 KB
         */
        sizeInKB(): number;
    }

    interface Blob {
        /**
         * Returns the size of the Blob in kilobytes.
         *
         * @returns Size in KB
         *
         * @example
         * const blob = new Blob(["Hello"]);
         * console.log(blob.sizeInKB()); // ~0.005 KB
         */
        sizeInKB(): number;
    }
}

if (!('sizeInKB' in File.prototype)) {
    Object.defineProperty(File.prototype, 'sizeInKB', {
        value: function(this: File): number {
            return this.size / 1024;
        },
        writable: true,
        configurable: true,
    });
}

if (!('sizeInKB' in Blob.prototype)) {
    Object.defineProperty(Blob.prototype, 'sizeInKB', {
        value: function(this: Blob): number {
            return this.size / 1024;
        },
        writable: true,
        configurable: true,
    });
}