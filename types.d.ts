declare module '@thatguyjamal/lib-js' {
	export class ArrayUtils {
		/**
		 * Removes duplicate values from an array.
		 * @param {Array} array - The array to remove duplicates from.
		 * @returns {Array} The array with duplicate values removed.
		 */
		static removeDuplicates<T>(array: T[]): T[];
		/**
		 * Flattens a nested array structure.
		 * @param {Array} array - The array to flatten.
		 * @returns {Array} The flattened array.
		 */
		static flatten<T>(array: T[][]): T[];
		/**
		 * Sums all elements in an array. (Assumes all elements are numbers)
		 * @param {Array} array - The array to calculate the sum from.
		 * @returns {number} The sum of all elements.
		 */
		static sum(array: number[]): number;
		/**
		 * Finds the maximum element in an array. (Assumes all elements are numbers)
		 * @param {Array} array - The array to find the maximum value from.
		 * @returns {*} The maximum value in the array.
		 */
		static findMax(array: number[]): number;
		/**
		 * Finds the minimum element in an array. (Assumes all elements are numbers)
		 * @param {Array} array - The array to find the minimum value from.
		 * @returns {*} The minimum value in the array.
		 */
		static findMin(array: number[]): number;
		/**
		 * Reverses an array in place.
		 * @param {Array} array - The array to reverse.
		 * @returns {Array} The reversed array.
		 */
		static reverse<T>(array: T[]): T[];
		/**
		 * Checks if all elements in an array pass a test.
		 * @param {Array} array - The array to check.
		 * @param {Function} callback - The test function.
		 * @returns {boolean} Returns true if all elements pass the test, false otherwise.
		 */
		static all<T>(array: T[], callback: (value: T) => boolean): boolean;
		/**
		 * Checks if any element in an array passes a test.
		 * @param {Array} array - The array to check.
		 * @param {Function} callback - The test function.
		 * @returns {boolean} Returns true if any element passes the test, false otherwise.
		 */
		static any<T>(array: T[], callback: (value: T) => boolean): boolean;
	}
	export interface Cache {
		/**
		 * `Cache`
		 *
		 * A simple cache implementation that keeps 2 internal caches. One for the active values and one for the stale values.
		 * It is more preformat to keep the stale values in a separate cache then deleting or purging them on every read/write.
		 *
		 * `Cache` will store `2n` items in memory where `n` is the **max** limit. This means that if you set the max limit to
		 * 3 and items `(1, 2, 3)` are in the cache, writing a new item `(4)` will purge the oldest item `(1)` from the cache.
		 *
		 * Only when the max limit is reached will the cache start purging stale values.
		 *
		 * @param {Number | undefined} max The max value to keep in cache before purging stale values. Default value is 5.
		 */
		constructor(max?: number): void;
		/**
		 * Read a value from the cache.
		 * @param {Number | String} k
		 * @returns {Object} The value of the key or null if it does not exist.
		 */
		read(k: number | string): unknown;
		/**
		 * Writes a value to the cache.
		 * @param {Number | String} k
		 * @param {*} v
		 */
		write(k: number | string, v: any): void;
		/**
		 * Checks if the key exists in the current or previous cache.
		 * @param {Number | String} k The key to check.
		 * @returns {Boolean} True if the key exists or false if it does not.
		 */
		exists(k: number | string): boolean;
		/**
		 * Clears the cache.
		 */
		clear(): void;
	}
	export class FuncHelper {
		/**
		 * Debounces a function, ensuring it is not called again until after a certain amount of time has passed.
		 * @param {Function} func - The function to be debounced.
		 * @param {number} delay - The delay in milliseconds.
		 * @returns {Function} The debounced function.
		 */
		static debounce<T extends (...args: any[]) => any>(
			func: T,
			delay: number
		): (...args: Parameters<T>) => void;
		/**
		 * Throttles a function, ensuring it is called at most once in a specified amount of time.
		 * @param {Function} func - The function to be throttled.
		 * @param {number} limit - The limit in milliseconds.
		 * @returns {Function} The throttled function.
		 */
		static throttle<T extends (...args: any[]) => any>(
			func: T,
			limit: number
		): (...args: Parameters<T>) => void;
		/**
		 * Composes multiple functions into a single function.
		 * @param  {...Function} funcs - The functions to be composed.
		 * @returns {Function} The composed function.
		 */
		static compose(...funcs: Function[]): (x: any) => any;
	}
	export class LazyTaskQueue {
		/**
		 * A queue to process tasks later lazily
		 *
		 * When adding a task, it will not be executed until the next() method is called.
		 */
		constructor();
		/**
		 * Adds a task to the queue
		 * @param {Function} task A function to process later
		 * @throws An Error If the task is not a function
		 * @returns {void} Nothing
		 */
		add(task: () => Promise<void>): void;
		/** Executes the next task in the queue */
		next(): void;
	}
	export class MathUtils {
		/**
		 * Rounds a number to a specified number of decimal places.
		 * @param {number} number - The number to round.
		 * @param {number} decimals - The number of decimal places.
		 * @returns {number} The rounded number.
		 */
		static roundToDecimal(number: number, decimals: number): number;
		/**
		 * Generates a random integer within a specified range.
		 * @param {number} min - The minimum value of the range.
		 * @param {number} max - The maximum value of the range.
		 * @returns {number} The random integer within the range.
		 */
		static randomIntegerInRange(min: number, max: number): number;
		/**
		 * Checks if a number is even.
		 * @param {number} number - The number to check.
		 * @returns {boolean} Returns true if the number is even, false otherwise.
		 */
		static isEven(number: number): boolean;
		/**
		 * Checks if a number is odd
		 * @param {Number} n
		 * @returns {Boolean}
		 */
		static isOdd(number: number): boolean;
		/**
		 * Checks if a number is a prime number.
		 * @param {number} number - The number to check.
		 * @returns {boolean} Returns true if the number is prime, false otherwise.
		 */
		static isPrime(number: number): boolean;
	}
	export class ObjectUtils {
		/**
		 * Creates a deep copy of the provided object.
		 * @param {Object} obj - The object to be cloned.
		 * @returns {Object} The deep clone of the object.
		 */
		static deepClone<T>(obj: T): T;
		/**
		 * Merges two objects into a new object.
		 * @param {Object} obj1 - The first object to merge.
		 * @param {Object} obj2 - The second object to merge.
		 * @returns {Object} The merged object.
		 */
		static mergeObjects(obj1: object, obj2: object): object;
		/**
		 * Merges multiple objects into a new object.
		 * @param  {...any} objects - The array of objects to merge.
		 * @returns {Object} The merged object.
		 */
		static mergeManyObjects(...objects: object[]): object;
		/**
		 * Checks whether a variable is an object and not an array.
		 * @param {*} item - The variable to be checked.
		 * @returns {Boolean} True if the item is an object, false otherwise.
		 */
		static isObject(item: any): boolean;
		/**
		 * Allows you to access nested properties of an object using a dot-separated path.
		 * @param {Object} obj - The object to access.
		 * @param {String} path - The dot-separated path of the property.
		 * @returns {*} The value of the accessed property, or undefined if not found.
		 */
		static accessObject<T>(obj: object, path: string): T | undefined;
	}
}
