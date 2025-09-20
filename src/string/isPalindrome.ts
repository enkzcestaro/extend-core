export {};

declare global {
    interface String {
        /**
         * Checks if the string is a palindrome.
         *
         * @returns true if palindrome, false otherwise
         *
         * @example
         * 'madam'.isPalindrome(); // true
         * 'hello'.isPalindrome(); // false
         */
        isPalindrome(): boolean;
    }
}

if (!('isPalindrome' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isPalindrome', {
        value: function(this: string): boolean {
            const str = this.replace(/\W/g, '').toLowerCase();
            return str === str.split('').reverse().join('');
        },
        writable: true,
        configurable: true,
    });
}