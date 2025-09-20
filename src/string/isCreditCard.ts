export {};

declare global {
    interface String {
        /**
         * Checks if the string is a valid credit card number using Luhn algorithm.
         *
         * @returns true if valid credit card, false otherwise
         *
         * @example
         * '4111111111111111'.isCreditCard(); // true
         * '1234567890123456'.isCreditCard(); // false
         */
        isCreditCard(): boolean;
    }
}

if (!('isCreditCard' in String.prototype)) {
    Object.defineProperty(String.prototype, 'isCreditCard', {
        value: function(this: string): boolean {
            const str = this.replace(/\D/g, '');
            let sum = 0;
            let shouldDouble = false;
            for (let i = str.length - 1; i >= 0; i--) {
                let digit = parseInt(str.charAt(i), 10);
                if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) digit -= 9;
                }
                sum += digit;
                shouldDouble = !shouldDouble;
            }
            return sum % 10 === 0 && str.length >= 12 && str.length <= 19;
        },
        writable: true,
        configurable: true,
    });
}