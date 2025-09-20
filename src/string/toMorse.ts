export { };

declare global {
    interface String {
        /**
         * Converts the string to Morse code representation.
         *
         * @example
         * 'SOS'.toMorse(); // "... --- ..."
         * 'Hello'.toMorse(); // ".... . .-.. .-.. ---"
         *
         * @returns Morse code string
         */
        toMorse(): string;
    }
}

if (!('toMorse' in String.prototype)) {
    Object.defineProperty(String.prototype, 'toMorse', {
        value: function(this: string): string {
            const morseMap: Record<string, string> = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
                'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
                'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
                'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
                'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
                'Z': '--..',
                '0': '-----', '1': '.----', '2': '..---', '3': '...--',
                '4': '....-', '5': '.....', '6': '-....', '7': '--...',
                '8': '---..', '9': '----.'
            };

            return this.toUpperCase()
                .split('')
                .map(c => morseMap[c] ?? c)
                .join(' ');
        },
        writable: true,
        configurable: true,
    });
}