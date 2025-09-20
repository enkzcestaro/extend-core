<div align="center">
	<br>
	<br>
	<img width="600" src="./assets/extend-core-light.png" alt="extend-core">
	<br>
	<hr>
	<p>
		<p>
			<sup>
				A comprehensive <b>TypeScript</b> library that extends native <b>JavaScript</b> prototypes with useful utility methods. This library provides additional functionality for <b>Arrays</b>, <b>Booleans</b>, <b>Dates</b>, <b>Functions</b>, <b>Numbers</b>, <b>Objects</b>, <b>Strings</b>, and more.
			</sup>
		</p>
	</p>
	<hr>
    <br>
</div>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [CDN Usage](#cdn-usage)
- [Categories](#categories)
  - [Array](#array)
  - [Boolean](#boolean)
  - [Buffer](#buffer)
  - [Date](#date)
  - [File](#file)
  - [Function](#function)
  - [Global](#global)
  - [JSON](#json)
  - [Math](#math)
  - [Number](#number)
  - [Object](#object)
  - [Promise](#promise)
  - [String](#string)

## Installation

via **npm**
```bash
npm install --save extend-core
```

via **yarn**
```bash
yarn add extend-core
```

## Usage

Simply import the library and start using the extended methods:

```typescript
/* for load all prototypes */
import 'extend-core';

/* for load only array prototypes */
import 'extend-core/array';

/* for load only array .pull prototype */
import 'extend-core/array/pull';

// Array methods
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.average()); // 3
console.log(numbers.chunk(2)); // [[1, 2], [3, 4], [5]]

// String methods
const text = 'hello world';
console.log(text.capitalize()); // 'Hello world'

// Date methods
const today = new Date();
console.log(today.isToday()); // true
```

## CDN Usage
You can use the library directly in the browser via **unpkg** or **jsDelivr**:

via **unpkg**
```html
<script src="https://unpkg.com/extend-core@1.0.0/dist/index.js"></script>
<script>
  console.log(isBoolean(true)); // true
</script>
````

via **jsDelivr**
```html
<script src="https://cdn.jsdelivr.net/npm/extend-core@1.0.0/dist/index.js"></script>
<script>
  console.log("abcdef".chunk(2)); // ['ab','cd','ef']
</script>
```

After including the script, the functions will be available globally.


## Categories

### Array

Array manipulation and utility functions.

#### Functions

- **average()** - Returns the average of all numeric elements
  ```ts
  [1, 2, 3].average(); // 2
  [1, 'a', 2].average(); // 1.5
  [].average(); // NaN
  ```

- **chunk(size)** - Splits the array into chunks of specified size
  ```ts
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.chunk(2)); // Output: [[1, 2], [3, 4], [5]]
  console.log(arr.chunk(3)); // Output: [[1, 2, 3], [4, 5]]
  ```

- **first()** - Returns the first element of the array
  ```ts
  const arr = [1, 2, 3];
  console.log(arr.first()); // Output: 1
  
  const emptyArr: number[] = [];
  console.log(emptyArr.first()); // Output: undefined
  ```

- **clone()** - Creates a shallow copy of the array
  ```ts
  const arr = [1,2,3];
  const copy = arr.clone();
  console.log(copy); // [1,2,3]
  console.log(copy === arr); // false
  ```

- **difference(values)** - Returns elements that are in the first array but not in the second
  ```ts
  [1, 2, 3, 4].difference([2, 4]); // [1, 3]
  ```

- **drop(n)** - Removes the first n elements
  ```ts
  [1,2,3,4].drop(2); // [3,4]
  ```

- **dropLast(n)** - Removes the last n elements
  ```ts
  [1,2,3,4].dropLast(2); // [1,2]
  ```
- **flatten(depth?)** - Flattens nested arrays up to the specified depth
  ```ts
  [1, [2, [3]]].flatten(); // [1, 2, [3]]
  [1, [2, [3]]].flatten(2); // [1, 2, 3]
  ```

- **flattenDeep()** - Recursively flattens all nested arrays
  ```ts
  [1, [2, [3, [4]]]].flattenDeep(); // [1, 2, 3, 4]
  ```
- **intersection(otherArray)** - Returns common elements between arrays
  ```ts
  [1,2,3].intersection([2,3,4]); // [2,3]
  ['a','b'].intersection(['b','c']); // ['b']
  ```

- **isEmpty()** - Checks if the array is empty
  ```ts
  [].isEmpty(); // true
  [1, 2, 3].isEmpty(); // false
  ```

- **last()** - Returns the last element of the array
  ```ts
  const arr = [1, 2, 3];
  console.log(arr.last()); // Output: 3
  
  const emptyArr: number[] = [];
  console.log(emptyArr.last()); // Output: undefined
  ```

- **max()** - Returns the maximum value
  ```ts
  [1, 2, 3].max(); // 3
  [1, 'a', 2].max(); // 2
  [].max(); // -Infinity
  ```

- **median()** - Returns the median value
  ```ts
  [1, 2, 3].median(); // 2
  [1, 'a', 2, 4].median(); // 2
  [1].median(); // 1
  [].median(); // NaN
  ```

- **min()** - Returns the minimum value
  ```ts
  [3, 1, 4, 1, 5].min(); // 1
  [1, 2, 'a', 3].min(); // 1
  ['a', 'b', 'c'].min(); // Infinity
  [].min(); // Infinity
  ```

- **mode()** - Returns the most frequent value
  ```ts
  [1, 2, 2, 3].mode(); // [2]
  [1, 1, 2, 2, 3].mode(); // [1, 2]
  [1].mode(); // [1]
  [].mode(); // []
  ```

- **padEnd(length, value)** - Pads the array to a specified length
  ```ts
  [1,2].padEnd(4, 0); // [1,2,0,0]
  ```

- **padStart(length, value)** - Pads the array to a specified length from the start
  ```ts
  [1,2].padStart(4, 0); // [0,0,1,2]
  ```
- **partition(predicate)** - Partitions the array based on a predicate
  ```ts
  [1,2,3,4].partition(x => x % 2 === 0); // [[2,4],[1,3]]
  ```

- **peek(position?)** - Returns the first or last element without removing it
  ```ts
  [1,2,3].peek(); // 3
  [1,2,3].peek('first'); // 1
  ```

- **pluck(keyOrPath)** - Extracts a property from each object in the array
  ```ts
  [{a:1}, {a:2}].pluck('a'); // [1,2]
  [{a:{b:1}}, {a:{b:2}}].pluck('a.b'); // [1,2]
  ```

- **product()** - Returns the product of all numeric elements
  ```ts
  [1,2,3,4].product(); // 24
  ```

- **pull(...values)** - Removes specified values from the array
  ```ts
  const arr = [1, 2, 3, 4, 5, 2];
  arr.pull(2); // arr is now [1, 3, 4, 5]
  
  const arr2 = [1, 2, 3, 4, 5];
  arr2.pull((n) => n % 2 === 0); // arr2 is now [1, 3, 5]
  ```

- **random()** - Returns a random element from the array
  ```ts
  const arr = [1, 2, 3];
  console.log(arr.random()); // Could be 1, 2, or 3
  
  const emptyArr: number[] = [];
  console.log(emptyArr.random()); // Output: undefined
  ```
- **reverseCopy()** - Returns a reversed copy of the array
  ```ts
  [1,2,3].reverseCopy(); // [3,2,1]
  const arr = [1,2,3];
  arr.reverseCopy(); // [3,2,1], arr remains [1,2,3]
  ```

- **rotate(steps)** - Rotates the array by a specified number of positions
  ```ts
  [1,2,3,4].rotate(1); // [4,1,2,3]
  [1,2,3,4].rotate(-1); // [2,3,4,1]
  ```
- **shuffle()** - Randomly shuffles the array
  ```ts
  const arr = [1, 2, 3, 4, 5];
  arr.shuffle(); // e.g., [3, 5, 1, 4, 2]
  ```

- **sortBy(key?, order?)** - Sorts the array by a specified property or function
  ```ts
  [3,1,2].sortBy(); // [1,2,3]
  [{a:2},{a:1}].sortBy('a'); // [{a:1},{a:2}]
  [{a:2},{a:1}].sortBy('a','desc'); // [{a:2},{a:1}]
  [{x:2},{x:1}].sortBy((item,i,array) => item.x + i, -1); // [{x:2},{x:1}]
  ```

- **std()** - Returns the standard deviation
  ```ts
  [2,4,4,4,5,5,7,9].std(); // 2
  ```
- **sum()** - Returns the sum of all numeric elements
  ```ts
  [1, 2, 3].sum(); // 6
  [1, 'a', 2].sum(); // 3
  ```

- **take(n)** - Returns the first n elements
  ```ts
  [1,2,3,4].take(2); // [1,2]
  ```

- **takeLast(n)** - Returns the last n elements
  ```ts
  [1,2,3,4].takeLast(2); // [3,4]
  ```

- **tap(fn)** - Executes a function and returns the original array
  ```ts
  [1,2,3].tap(arr => console.log(arr)).map(x => x*2);
  ```
- **unique(keyFn?)** - Returns unique elements from the array
  ```ts
  [1,2,2,3,1].unique(); // [1,2,3]
  [{a:1},{a:1}].unique(item => item.a); // [{a:1}]
  ```

- **variance()** - Returns the variance of numeric elements
  ```ts
  [2,4,4,4,5,5,7,9].variance(); // 4
  ```
- **zip(...arrays)** - Combines multiple arrays into an array of tuples
  ```ts
  [1,2,3].zip(['a','b','c']); // [[1,'a'], [2,'b'], [3,'c']]
  [1,2].zip(['a','b','c'], ['x','y']); // [[1,'a','x'], [2,'b','y'], [undefined,'c',undefined]]
  ```

### Boolean

Boolean operations and utilities.

#### Functions

- **and(other)** - Performs AND operation with another boolean
  ```ts
  (true).and(true);   // true
  (true).and(false);  // false
  ```

- **isTrue()** - Checks if the value is exactly true
  ```ts
  (true).isTrue();  // true
  (false).isTrue(); // false
  ```

- **isFalse()** - Checks if the value is exactly false
  ```ts
  (true).isFalse();  // false
  (false).isFalse(); // true
  ```

- **nand(other)** - Performs NAND operation
  ```ts
  (true).nand(true);   // false
  (true).nand(false);  // true
  ```
- **nor(other)** - Performs NOR operation
  ```ts
  (false).nor(false); // true
  (true).nor(false);  // false
  ```
- **or(other)** - Performs OR operation with another boolean
  ```ts
  (true).or(false);   // true
  (false).or(false);  // false
  ```

- **toBit()** - Converts boolean to bit (0 or 1)
  ```ts
  (true).toBit();  // "1"
  (false).toBit(); // "0"
  ```

- **toggle()** - Toggles the boolean value
  ```ts
  (true).toggle();  // false
  (false).toggle(); // true
  ```
- **toNumber()** - Converts boolean to number
  ```ts
  (true).toNumber();  // 1
  (false).toNumber(); // 0
  ```

- **toString()** - Converts boolean to string
  ```ts
  (true).toString();  // "true"
  (false).toString(); // "false"
  ```
- **xor(other)** - Performs XOR operation with another boolean
  ```ts
  (true).xor(false);  // true
  (true).xor(true);   // false
  ```

### Buffer

Buffer utilities and conversions.

#### Functions

- **toBase64()** - Converts buffer to base64 string
  ```ts
  const buf = Buffer.from('hello');
  buf.toBase64(); // "aGVsbG8="
  ```

- **toUint8Array()** - Converts buffer to Uint8Array
  ```ts
  const buf = new ArrayBuffer(4);
  const arr = buf.toUint8Array(); // Uint8Array(4) [0,0,0,0]
  ```

### Date

Date manipulation and utility functions.

#### Functions

- **addDays(n)** - Adds n days to the date
  ```ts
  const d = new Date();
  d.addDays(5); // 5 gün ekler
  ```

- **isToday()** - Checks if the date is today
  ```ts
  new Date().isToday(); // true
  ```

- **addHours(n)** - Adds hours to the date
  ```ts
  const d = new Date('2025-09-17T12:00:00');
  d.addHours(3); // 2025-09-17T15:00:00
  ```

- **addMinutes(n)** - Adds minutes to the date
  ```ts
  const d = new Date('2025-09-17T12:00:00');
  d.addMinutes(15); // 2025-09-17T12:15:00
  ```

- **addMonths(n)** - Adds months to the date
- **addSeconds(n)** - Adds seconds to the date
  ```ts
  const d = new Date('2025-09-17T12:00:00');
  d.addSeconds(30); // 2025-09-17T12:00:30
  ```

- **addWeeks(n)** - Adds weeks to the date
- **addYears(n)** - Adds years to the date
- **clone()** - Creates a copy of the date
  ```ts
  const d1 = new Date('2025-09-17');
  const d2 = d1.clone();
  d1 === d2; // false
  ```

- **dayName()** - Returns the day name
- **dayOfYear()** - Returns the day of the year
  ```ts
  const d = new Date('2025-01-15');
  d.dayOfYear(); // 15
  ```

- **differenceInDays(otherDate)** - Calculates difference in days
- **differenceInMonths(otherDate)** - Calculates difference in months
- **differenceInYears(otherDate)** - Calculates difference in years
- **diffInDays(otherDate)** - Calculates difference in days
  ```ts
  new Date('2025-09-17').diffInDays(new Date('2025-09-20')); // -3
  ```

- **diffInHours(otherDate)** - Calculates difference in hours
  ```ts
  new Date('2025-09-17T12:00').diffInHours(new Date('2025-09-17T08:00')); // 4
  ```

- **diffInMinutes(otherDate)** - Calculates difference in minutes
  ```ts
  new Date('2025-09-17T12:00').diffInMinutes(new Date('2025-09-17T11:30')); // 30
  ```

- **diffInMonths(otherDate)** - Calculates difference in months
  ```ts
  new Date('2025-09-17').diffInMonths(new Date('2025-06-17')); // 3
  ```

- **diffInSeconds(otherDate)** - Calculates difference in seconds
  ```ts
  new Date('2025-09-17T12:00:30').diffInSeconds(new Date('2025-09-17T12:00:00')); // 30
  ```

- **diffInYears(otherDate)** - Calculates difference in years
  ```ts
  new Date('2025-09-17').diffInYears(new Date('2020-09-17')); // 5
  ```

- **endOfDay()** - Returns end of day
- **endOfMonth()** - Returns end of month
- **endOfYear()** - Returns end of year
- **format(fmt)** - Formats the date according to the given format string
  ```ts
  const d = new Date('2025-09-17T12:30:45');
  d.format('YYYY-MM-DD'); // "2025-09-17"
  d.format('DD/MM/YYYY HH:mm'); // "17/09/2025 12:30"
  ```

- **isAfter(otherDate)** - Checks if date is after another date
  ```ts
  const d1 = new Date('2025-09-19');
  const d2 = new Date('2025-09-18');
  d1.isAfter(d2); // true
  ```

- **isBefore(otherDate)** - Checks if date is before another date
  ```ts
  const d1 = new Date('2025-09-17');
  const d2 = new Date('2025-09-18');
  d1.isBefore(d2); // true
  ```

- **isBetween(startDate, endDate)** - Checks if date is between two dates
  ```ts
  const d = new Date('2025-09-17');
  d.isBetween(new Date('2025-09-16'), new Date('2025-09-18')); // true
  ```

- **isFuture()** - Checks if date is in the future
  ```ts
  new Date('2030-01-01').isFuture(); // true
  ```
- **isLeapYear()** - Checks if year is a leap year
  ```ts
  new Date('2024-01-01').isLeapYear(); // true
  ```

- **isPast()** - Checks if date is in the past
  ```ts
  new Date('2020-01-01').isPast(); // true
  ```

- **isSameDay(otherDate)** - Checks if dates are the same day
  ```ts
  const d1 = new Date('2025-09-17');
  const d2 = new Date('2025-09-17');
  d1.isSameDay(d2); // true
  ```

- **isSameMonth(otherDate)** - Checks if dates are the same month
  ```ts
  const d1 = new Date('2025-09-17');
  const d2 = new Date('2025-09-01');
  d1.isSameMonth(d2); // true
  ```

- **isSameYear(otherDate)** - Checks if dates are the same year
  ```ts
  const d1 = new Date('2025-09-17');
  const d2 = new Date('2025-01-01');
  d1.isSameYear(d2); // true
  ```

- **isTomorrow()** - Checks if date is tomorrow
  ```ts
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.isTomorrow(); // true
  ```

- **isWeekday()** - Checks if date is a weekday
  ```ts
  new Date('2025-09-17').isWeekday(); // true (Wednesday)
  ```

- **isWeekend()** - Checks if date is a weekend
  ```ts
  new Date('2025-09-20').isWeekend(); // true (Saturday)
  ```

- **isYesterday()** - Checks if date is yesterday
  ```ts
  const d = new Date();
  d.setDate(d.getDate() - 1);
  d.isYesterday(); // true
  ```
- **monthName()** - Returns the month name
- **quarter()** - Returns the quarter
  ```ts
  const d = new Date('2025-05-10');
  d.quarter(); // 2
  ```
- **startOfDay()** - Returns start of day
- **startOfMonth()** - Returns start of month
- **startOfYear()** - Returns start of year
- **subtractDays(n)** - Subtracts days from the date
- **subtractHours(n)** - Subtracts hours from the date
  ```ts
  const d = new Date('2025-09-17T12:00:00');
  d.subtractHours(2); // 2025-09-17T10:00:00
  ```

- **subtractMinutes(n)** - Subtracts minutes from the date
  ```ts
  const d = new Date('2025-09-17T12:00:00');
  d.subtractMinutes(30); // 2025-09-17T11:30:00
  ```

- **subtractMonths(n)** - Subtracts months from the date
- **subtractSeconds(n)** - Subtracts seconds from the date
  ```ts
  const d = new Date('2025-09-17T12:00:00');
  d.subtractSeconds(15); // 2025-09-17T11:59:45
  ```

- **subtractWeeks(n)** - Subtracts weeks from the date
- **subtractYears(n)** - Subtracts years from the date
- **toArray()** - Converts date to array
  ```ts
  new Date('2025-09-17T12:34:56.789Z').toArray();
  // [2025, 9, 17, 12, 34, 56, 789]
  ```

- **toLongDate(locale?)** - Returns long date format
  ```ts
  new Date('2025-09-17').toLongDate(); // "17 September 2025"
  new Date('2025-09-17').toLongDate('tr-TR'); // "17 Eylül 2025"
  ```

- **toMilliseconds()** - Returns milliseconds
  ```ts
  const d = new Date('1970-01-01T00:00:01.500Z');
  d.toMilliseconds(); // 1500
  ```

- **toObject()** - Converts date to object
  ```ts
  new Date('2025-09-17T12:34:56.789Z').toObject();
  // { year: 2025, month: 9, day: 17, hour: 12, minute: 34, second: 56, millisecond: 789 }
  ```

- **toShortDate(locale?)** - Returns short date format
  ```ts
  new Date('2025-09-17').toShortDate(); // "17/09/2025"
  new Date('2025-09-17').toShortDate('en-GB'); // "17/09/2025"
  ```

- **toUnix()** - Returns Unix timestamp
  ```ts
  const d = new Date('1970-01-01T00:00:01Z');
  d.toUnix(); // 1
  ```

- **weekNumber()** - Returns week number
  ```ts
  const d = new Date('2025-01-03');
  d.weekNumber(); // 1
  ```

### File

File utilities and operations.

#### Functions

- **sizeInKB()** - Returns file size in KB
  ```ts
  const file = new File(["Hello"], "hello.txt");
  console.log(file.sizeInKB()); // ~0.005 KB
  ```

- **sizeInMB()** - Returns file size in MB
  ```ts
  const file = new File(["Hello"], "hello.txt");
  console.log(file.sizeInMB()); // ~0.000005 MB
  ```

- **toBase64()** - Converts file to base64
  ```ts
  const base64 = await file.toBase64();
  ```

### Function

Function utilities and higher-order functions.

#### Functions

- **debounce(ms)** - Debounces the function by given milliseconds
  ```ts
  const log = () => console.log('Hi');
  const debounced = log.debounce(300);
  ```

- **memoize()** - Caches the results of the function for same arguments
  ```ts
  const fib = (n: number): number => n <= 1 ? n : fib(n-1)+fib(n-2);
  const fastFib = fib.memoize();
  ```

- **cancellable()** - Makes function cancelable
  ```ts
  const log = () => console.log('Hi');
  const fn = log.cancellable();
  fn();
  fn.cancel();
  ```

- **compose(...fns)** - Composes multiple functions
  ```ts
  const double = (x: number) => x*2;
  const increment = (x: number) => x+1;
  const fn = Function.compose(double, increment);
  fn(3); // double(increment(3)) => 8
  ```

- **curry()** - Curries the function
  ```ts
  const add = (a: number, b: number) => a + b;
  const curried = add.curry();
  curried(1)(2); // 3
  ```

- **delay(ms)** - Delays function execution
  ```ts
  const sayHi = () => console.log('Hi');
  sayHi.delay(1000)(); // logs "Hi" after 1 second
  ```
- **once()** - Ensures function runs only once
  ```ts
  const init = () => console.log('Init');
  const runOnce = init.once();
  runOnce(); // "Init"
  runOnce(); // does nothing
  ```

- **pipe(...fns)** - Pipes functions together
  ```ts
  const add = (a: number) => a + 1;
  const double = (a: number) => a * 2;
  const piped = add.pipe(double);
  piped(2); // double(add(2)) = 6
  ```

- **safe()** - Wraps function in try-catch
  ```ts
  const risky = (x: number) => { if (x < 0) throw new Error(); return x * 2; };
  const safeFn = risky.safe();
  safeFn(5);  // 10
  safeFn(-3); // undefined
  ```

- **tap(fn)** - Executes function and returns original value
  ```ts
  const add = (x: number) => x + 1;
  const wrapped = add.tap(result => console.log(result));
  wrapped(2); // logs 3, returns 3
  ```
- **throttle(ms)** - Throttles function execution
  ```ts
  const log = () => console.log('Hi');
  const throttled = log.throttle(500);
  ```

### Global

Global utility functions for type checking and validation.

#### Functions

- **isArray(value)** - Checks if the given value is an array
  ```ts
  isArray([1, 2, 3]); // true
  isArray('hello'); // false
  isArray({}); // false
  ```

- **isBoolean(value)** - Checks if value is boolean
  ```ts
  isBoolean(true); // true
  isBoolean(false); // true
  isBoolean(0); // false
  isBoolean('true'); // false
  ```

- **isDate(value)** - Checks if value is date
  ```ts
  isDate(new Date()); // true
  isDate('2023-01-01'); // false
  isDate({}); // false
  ```

- **isEmpty(value)** - Checks if value is empty
  ```ts
  isEmpty(null); // true
  isEmpty(undefined); // true
  isEmpty(''); // true
  isEmpty([]); // true
  isEmpty({}); // true
  isEmpty(0); // false
  isEmpty('hello'); // false
  isEmpty([1, 2, 3]); // false
  isEmpty({ a: 1 }); // false
  ```

- **isFunction(value)** - Checks if value is function
  ```ts
  isFunction(function() {}); // true
  isFunction(() => {}); // true
  isFunction(class {}); // true
  isFunction(123); // false
  isFunction('hello'); // false
  ```

- **isNil(value)** - Checks if value is null or undefined
  ```ts
  isNil(null); // true
  isNil(undefined); // true
  isNil(0); // false
  isNil(''); // false
  ```

- **isNumber(value)** - Checks if value is number
  ```ts
  isNumber(123); // true
  isNumber('hello'); // false
  isNumber(NaN); // false
  ```

- **isObject(value)** - Checks if value is object
  ```ts
  isObject({}); // true
  isObject([]); // true
  isObject(null); // false
  isObject(123); // false
  ```

- **isPromise(value)** - Checks if value is promise
  ```ts
  isPromise(Promise.resolve()); // true
  isPromise({ then: () => {}, catch: () => {} }); // true
  isPromise(123); // false
  ```
- **isString(value)** - Checks if value is string
  ```ts
  isString('hello'); // true
  isString(123); // false
  isString({}); // false
  ```

- **isUndefined(value)** - Checks if value is undefined
  ```ts
  isUndefined(undefined); // true
  isUndefined(null); // false
  isUndefined(0); // false
  ```

### JSON

JSON utilities and safe parsing.

#### Functions

- **safeParse(text)** - Safely parses JSON string
  ```ts
  JSON.safeParse('{"a":1}'); // { a: 1 }
  JSON.safeParse('invalid'); // undefined
  
  // Generic type example
  interface User { id: number; name: string; }
  const user = JSON.safeParse<User>('{"id":1,"name":"Alice"}');
  if (user) {
    console.log(user.id); // 1
  }
  ```

- **safeStringify(value, space?)** - Safely stringifies object to JSON
  ```ts
  JSON.safeStringify({a:1}); // '{"a":1}'
  JSON.safeStringify(() => {}); // undefined
  ```

### Math

Mathematical operations and utilities.

#### Functions

- **add(a, b)** - Adds two numbers
  ```ts
  Math.add(5, 3); // 8
  ```

- **average()** - Calculates average
- **clamp(value, min, max)** - Clamps value between min and max
  ```ts
  Math.clamp(10, 0, 5); // 5
  Math.clamp(-2, 0, 5); // 0
  ```

- **decrement()** - Decrements number by 1
- **degToRad()** - Converts degrees to radians
- **divide()** - Divides two numbers
- **factorial(n)** - Calculates factorial
  ```ts
  Math.factorial(5); // 120
  ```

- **gcd(a, b)** - Calculates greatest common divisor
  ```ts
  Math.gcd(12, 18); // 6
  ```
- **geometricMean()** - Calculates geometric mean
- **harmonicMean()** - Calculates harmonic mean
- **increment()** - Increments number by 1
- **isBetween()** - Checks if number is between two values
- **isEven()** - Checks if number is even
- **isFinite()** - Checks if number is finite
- **isInfinity()** - Checks if number is infinity
- **isInteger()** - Checks if number is integer
- **isMultipleOf()** - Checks if number is multiple of another
- **isNegative()** - Checks if number is negative
- **isOdd()** - Checks if number is odd
- **isPositive()** - Checks if number is positive
- **isPrime()** - Checks if number is prime
- **lcm()** - Calculates least common multiple
- **lerp(a, b, t)** - Linear interpolation
  ```ts
  Math.lerp(0, 10, 0.5); // 5
  ```
- **maxArray()** - Returns maximum from array
- **minArray()** - Returns minimum from array
- **mod()** - Modulo operation
- **multiply()** - Multiplies two numbers
- **negate()** - Negates number
- **normalize()** - Normalizes value to 0-1 range
- **percentage()** - Calculates percentage
- **product()** - Calculates product of array
- **radToDeg()** - Converts radians to degrees
- **randomBoolean()** - Returns random boolean
- **randomChoice()** - Returns random choice from array
- **randomFloat()** - Returns random float
- **randomInt(min, max)** - Returns random integer
  ```ts
  Math.randomInt(1, 6); // 4
  Math.randomInt(10, 20); // 15
  ```
- **randomSign()** - Returns random sign
- **range()** - Creates range of numbers
- **rootMeanSquare()** - Calculates root mean square
- **roundTo()** - Rounds to specified decimal places
- **scale()** - Scales value to new range
- **signOrZero()** - Returns sign or zero
- **subtract()** - Subtracts two numbers
- **sum()** - Calculates sum of array
- **toBinary()** - Converts to binary
- **toFixed()** - Formats number with fixed decimals
- **toHex()** - Converts to hexadecimal
- **toInt()** - Converts to integer
- **toRoman()** - Converts to Roman numerals
- **zScore()** - Calculates z-score

### Number

Number utilities and operations.

#### Functions

- **abs()** - Returns the absolute value of the number
  ```ts
  (-5).abs(); // 5
  ```

- **add()** - Adds two numbers
- **average()** - Calculates average
- **between()** - Checks if number is between two values
- **cbrt()** - Calculates cube root
- **ceil()** - Rounds up to nearest integer
  ```ts
  (3.01).ceil(); // 4
  ```

- **clamp()** - Clamps value between min and max
- **cube()** - Calculates cube
  ```ts
  (3).cube(); // 27
  ```
- **decrement()** - Decrements by 1
- **divide()** - Divides two numbers
- **divisors()** - Returns divisors
- **equals(other, tolerance?)** - Checks equality
  ```ts
  (5.01).equals(5, 0.1); // true
  ```

- **exp()** - Calculates exponential
  ```ts
  (1).exp(); // Math.E
  ```
- **factorial()** - Calculates factorial
- **floor()** - Rounds down to nearest integer
  ```ts
  (3.99).floor(); // 3
  ```
- **gcd()** - Calculates greatest common divisor
- **increment()** - Increments by 1
- **inRange(min, max, inclusive?)** - Checks if in range
  ```ts
  (5).inRange(1, 10); // true
  ```

- **isBetween()** - Checks if between two values
- **isEven()** - Checks if even
  ```ts
  (4).isEven(); // true
  (5).isEven(); // false
  ```

- **isFibonacci()** - Checks if Fibonacci number
  ```ts
  (8).isFibonacci(); // true
  ```

- **isFinite()** - Checks if finite
- **isFloat()** - Checks if float
  ```ts
  (5.5).isFloat(); // true
  (5).isFloat();   // false
  ```

- **isInfinity()** - Checks if infinity
  ```ts
  (Infinity).isInfinity(); // true
  (-Infinity).isInfinity(); // true
  (5).isInfinity(); // false
  ```

- **isInteger()** - Checks if integer
  ```ts
  (5).isInteger();   // true
  (5.5).isInteger(); // false
  ```

- **isMultipleOf(other)** - Checks if multiple of
  ```ts
  (12).isMultipleOf(3); // true
  (12).isMultipleOf(5); // false
  ```

- **isNegative()** - Checks if negative
  ```ts
  (-5).isNegative(); // true
  (3).isNegative();  // false
  ```
- **isOdd()** - Checks if odd
- **isPerfect()** - Checks if perfect number
  ```ts
  (6).isPerfect(); // true
  ```

- **isPerfectSquare()** - Checks if perfect square
  ```ts
  (16).isPerfectSquare(); // true
  (20).isPerfectSquare(); // false
  ```

- **isPositive()** - Checks if positive
  ```ts
  (5).isPositive(); // true
  (-3).isPositive(); // false
  ```
- **isPrime()** - Checks if prime
  ```ts
  (7).isPrime(); // true
  (10).isPrime(); // false
  ```

- **isZero()** - Checks if zero
  ```ts
  (0).isZero(); // true
  (5).isZero(); // false
  ```

- **lcm()** - Calculates least common multiple
- **log(base?)** - Calculates logarithm
  ```ts
  (10).log(); // Math.log(10)
  (8).log(2); // 3
  ```

- **median(...others)** - Calculates median
  ```ts
  (5).median(10, 15); // 10
  ```
- **mod()** - Modulo operation
- **multiply()** - Multiplies two numbers
- **negate()** - Negates number
- **nthRoot(n)** - Calculates nth root
  ```ts
  (27).nthRoot(3); // 3
  ```

- **padEnd(length, char?)** - Pads string representation
  ```ts
  (5).padEnd(3); // "5--"
  ```
- **padStart()** - Pads string representation
- **pow()** - Calculates power
- **round(decimals?)** - Rounds to nearest integer
  ```ts
  (3.14159).round(2); // 3.14
  (3.14159).round(); // 3
  ```
- **roundTo()** - Rounds to specified decimals
- **sign()** - Returns sign
- **sqrt()** - Calculates square root
  ```ts
  (9).sqrt(); // 3
  ```
- **square()** - Calculates square
- **subtract()** - Subtracts two numbers
- **surround()** - Surrounds with characters
- **times()** - Repeats function n times
- **toBinary()** - Converts to binary
- **toBinaryFileSize()** - Converts to binary file size
- **toCurrency()** - Converts to currency format
- **toDate()** - Converts to date
- **toDays()** - Converts to days
- **toDaysFromHours()** - Converts hours to days
- **toDaysFromMinutes()** - Converts minutes to days
- **toDaysFromMonths()** - Converts months to days
- **toDaysFromSeconds()** - Converts seconds to days
- **toDaysFromWeeks()** - Converts weeks to days
- **toDaysFromYears()** - Converts years to days
- **toDegree()** - Converts to degrees
- **toDuration()** - Converts to duration string
- **toFileSize()** - Converts to file size
- **toHex()** - Converts to hexadecimal
- **toHours()** - Converts to hours
- **toLongDuration()** - Converts to long duration
- **toMilliseconds()** - Converts to milliseconds
- **toMinutes()** - Converts to minutes
- **toMonths()** - Converts to months
- **toOctal()** - Converts to octal
- **toPadded()** - Pads number
- **toPercent()** - Converts to percentage
- **toPercentString()** - Converts to percentage string
- **toRadian()** - Converts to radians
- **toRoman()** - Converts to Roman numerals
  ```ts
  (9).toRoman(); // "IX"
  ```

- **toSeconds()** - Converts to seconds
- **toSeparated()** - Adds separators
- **toTime()** - Converts to time string
- **toWeeks()** - Converts to weeks
- **toWords()** - Converts to words
- **toYears()** - Converts to years
- **variance()** - Calculates variance

### Object

Object manipulation and utility functions.

#### Functions

- **clone(obj)** - Creates a shallow clone of an object
  ```ts
  Object.clone({ a: 1, b: 2 }); // { a: 1, b: 2 }
  ```

- **countKeys(obj)** - Counts object keys
  ```ts
  Object.countKeys({ a:1, b:2 }); // 2
  ```

- **countValues(obj)** - Counts object values
  ```ts
  Object.countValues({ a:1, b:2 }); // 2
  ```
- **deepClone(obj)** - Creates deep clone
  ```ts
  Object.deepClone({ a: { b: 1 } }); // { a: { b:1 } } (new nested object)
  ```

- **defaults()** - Sets default values
- **every()** - Checks if all properties satisfy condition
- **filter(obj, fn)** - Filters object properties
  ```ts
  Object.filter({ a:1, b:2, c:3 }, (v) => v > 1); // { b:2, c:3 }
  ```

- **filterKeys(obj, fn)** - Filters object keys
  ```ts
  Object.filterKeys({ a:1, b:2, c:3 }, k => k !== 'b'); // { a:1, c:3 }
  ```

- **filterValues(obj, fn)** - Filters object values
  ```ts
  Object.filterValues({ a:1, b:2, c:3 }, v => v > 1); // { b:2, c:3 }
  ```

- **findKey(obj, fn)** - Finds key by value
  ```ts
  Object.findKey({ a:1, b:2 }, v => v === 2); // 'b'
  ```

- **findValue(obj, fn)** - Finds value by key
  ```ts
  Object.findValue({ a:1, b:2 }, v => v > 1); // 2
  ```

- **fromFlat(obj, separator?)** - Creates object from flat structure
  ```ts
  Object.fromFlat({ 'a.b': 1 }); // { a: { b: 1 } }
  ```
- **get()** - Gets nested property
- **hasKey(obj, key)** - Checks if has key
  ```ts
  Object.hasKey({ a: 1 }, 'a'); // true
  Object.hasKey({ a: 1 }, 'b'); // false
  ```

- **hasKeys(obj, keys)** - Checks if has keys
  ```ts
  Object.hasKeys({ a: 1, b: 2 }, ['a','b']); // true
  Object.hasKeys({ a: 1 }, ['a','b']); // false
  ```
- **hasPath()** - Checks if has path
- **hasValue()** - Checks if has value
- **invert()** - Inverts key-value pairs
- **isEmpty()** - Checks if object is empty
- **isEqual()** - Checks deep equality
- **isPlainObject()** - Checks if plain object
- **isShallowEqual()** - Checks shallow equality
- **mapKeys()** - Maps object keys
- **mapValues()** - Maps object values
- **merge(target, source)** - Deep merges two objects
  ```ts
  Object.merge({ a: { x: 1 } }, { a: { y: 2 } }); // { a: { x:1, y:2 } }
  ```

- **omit()** - Omits specified keys
- **pick()** - Picks specified keys
- **reject()** - Rejects properties by condition
- **setIfUndefined()** - Sets value if undefined
- **size()** - Returns object size
- **some()** - Checks if any property satisfies condition
- **tap()** - Executes function and returns object
- **toFlat()** - Flattens object
- **toPairs()** - Converts to key-value pairs
- **unset()** - Removes property
- **update()** - Updates property

### Promise

Promise utilities and helpers.

#### Functions

- **delay(ms)** - Delays promise resolution
  ```ts
  Promise.resolve(42).delay(1000).then(console.log); // logs 42 after 1s
  ```

- **retry(times, delayMs?)** - Retries promise on failure
- **tap(fn)** - Executes function and returns promise
  ```ts
  Promise.resolve(42)
    .tap(value => console.log(value)) // logs 42
    .then(value => console.log(value)); // 42
  ```

- **timeout(ms, error?)** - Adds timeout to promise
  ```ts
  Promise.resolve(42).timeout(1000).then(console.log);
  ```

### String

String manipulation and utility functions.

#### Functions

- **capitalize()** - Capitalizes only the first letter of the string
  ```ts
  'hello'.capitalize(); // 'Hello'
  ```

- **chunk(n)** - Splits string into chunks
  ```ts
  'abcdef'.chunk(2); // ['ab','cd','ef']
  ```

- **contains(substr)** - Checks if string contains substring
  ```ts
  'hello world'.contains('world'); // true
  ```

- **count(substr)** - Counts occurrences
  ```ts
  'ababab'.count('ab'); // 3
  ```

- **drop(n)** - Removes first n characters
  ```ts
  'hello'.drop(2); // 'llo'
  ```

- **dropLast(n)** - Removes last n characters
  ```ts
  'hello'.dropLast(2); // 'hel'
  ```
- **endsWithIgnoreCase(substr)** - Checks if ends with (case insensitive)
  ```ts
  'Hello World'.endsWithIgnoreCase('WORLD'); // true
  ```

- **first(n?)** - Returns first character
  ```ts
  'hello'.first(2); // 'he'
  'hello'.first(); // 'h'
  'hello'.first(0); // ''
  'hello'.first(10); // 'hello'
  ```

- **firstWord()** - Returns first word
  ```ts
  'Hello world!'.firstWord(); // 'Hello'
  ''.firstWord(); // ''
  ```

- **includesIgnoreCase(substr)** - Checks if includes (case insensitive)
  ```ts
  'Hello World'.includesIgnoreCase('hello'); // true
  ```

- **indexAll(substr)** - Returns all indices of substring
  ```ts
  'ababab'.indexAll('ab'); // [0,2,4]
  ```
- **isAlpha()** - Checks if alphabetic
- **isAlphaNumeric()** - Checks if alphanumeric
- **isAnagramOf()** - Checks if anagram
- **isBase64()** - Checks if base64
- **isBinary()** - Checks if binary
- **isBlank()** - Checks if blank
- **isCreditCard()** - Checks if credit card number
- **isDate()** - Checks if date string
- **isDomain()** - Checks if domain
- **isEmail()** - Checks if email
  ```ts
  'user@example.com'.isEmail(); // true
  'user@com'.isEmail();         // false
  ```

- **isEmoji()** - Checks if emoji
- **isEmpty()** - Checks if empty
- **isFloat()** - Checks if float string
- **isHex()** - Checks if hexadecimal
- **isInteger()** - Checks if integer string
- **isIp()** - Checks if IP address
- **isIsoDate()** - Checks if ISO date
- **isJSON()** - Checks if JSON string
- **isLowerCase()** - Checks if lowercase
- **isNumeric()** - Checks if numeric
- **isOctal()** - Checks if octal
- **isPalindrome()** - Checks if palindrome
- **isPhone()** - Checks if phone number
- **isTime()** - Checks if time string
- **isUpperCase()** - Checks if uppercase
- **isURL()** - Checks if URL
- **isUUID()** - Checks if UUID
- **isWhitespace()** - Checks if whitespace
- **last()** - Returns last character
- **lastWord()** - Returns last word
- **lengthStats()** - Returns length statistics
- **normalizeSpaces()** - Normalizes spaces
- **padBoth()** - Pads both sides
- **remove()** - Removes characters
- **reverse()** - Reverses string
  ```ts
  'hello'.reverse(); // 'olleh'
  ```
- **splitLines()** - Splits into lines
- **startsWithIgnoreCase()** - Checks if starts with (case insensitive)
- **stripNonAlpha()** - Strips non-alphabetic characters
- **stripNumbers()** - Strips numbers
- **stripPunctuation()** - Strips punctuation
- **stripSymbols()** - Strips symbols
- **stripWhitespace()** - Strips whitespace
- **surround()** - Surrounds with characters
- **take()** - Takes first n characters
- **takeLast()** - Takes last n characters
- **tap()** - Executes function and returns string
- **toArray()** - Converts to character array
- **toAscii()** - Converts to ASCII
- **toBinary()** - Converts to binary
- **toBoolean()** - Converts to boolean
- **toCamelCase()** - Converts to camelCase
  ```ts
  'foo_bar'.toCamelCase(); // 'fooBar'
  'hello-world'.toCamelCase(); // 'helloWorld'
  ```

- **toCharCodes()** - Converts to character codes
- **toDate()** - Converts to date
- **toFloat()** - Converts to float
- **toHex()** - Converts to hexadecimal
- **toInt()** - Converts to integer
- **toKebabCase()** - Converts to kebab-case
- **toMorse()** - Converts to Morse code
- **toNumber()** - Converts to number
- **toPascalCase()** - Converts to PascalCase
- **toSlug()** - Converts to slug
- **toSnakeCase()** - Converts to snake_case
- **toSwapCase()** - Converts to swap case
- **toTitleCase()** - Converts to Title Case
- **toUnicode()** - Converts to Unicode
- **truncate()** - Truncates string
- **words()** - Splits into words

## License

MIT
