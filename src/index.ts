
/* Extend Core - A TypeScript library that extends built-in JavaScript objects with useful methods. */

/* Import all modules to extend the prototypes of built-in objects. */

/* Uncomment the following line if you want to include Buffer extensions. */
/* Note: Buffer is typically used in Node.js environments. */
/* import 'extend-core/buffer'; */

/* import './buffer'; */

import './array';
import './boolean';
import './date';
import './file';
import './function';
import './global';
import './json';
import './math';
import './number';
import './object';
import './promise';
import './string';

/**
 * Current version of the library.
 * @type {string}
 * @example
 * console.log(version); // '1.0.0'
 *
 */
const version: string = '1.0.0';
export { version };
