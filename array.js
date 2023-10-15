class ArrayUtils {
	/**
	 * Removes duplicate values from an array.
	 * @param {Array} array - The array to remove duplicates from.
	 * @returns {Array} The array with duplicate values removed.
	 */
	static removeDuplicates(array) {
		return [...new Set(array)];
	}

	/**
	 * Flattens a nested array structure.
	 * @param {Array} array - The array to flatten.
	 * @returns {Array} The flattened array.
	 */
	static flatten(array) {
		return array.flat(Infinity);
	}

	/**
	 * Sums all elements in an array. (Assumes all elements are numbers)
	 * @param {Array} array - The array to calculate the sum from.
	 * @returns {number} The sum of all elements.
	 */
	static sum(array) {
		return array.reduce((sum, current) => sum + current, 0);
	}

	/**
	 * Finds the maximum element in an array. (Assumes all elements are numbers)
	 * @param {Array} array - The array to find the maximum value from.
	 * @returns {*} The maximum value in the array.
	 */
	static findMax(array) {
		return Math.max(...array);
	}

	/**
	 * Finds the minimum element in an array. (Assumes all elements are numbers)
	 * @param {Array} array - The array to find the minimum value from.
	 * @returns {*} The minimum value in the array.
	 */
	static findMin(array) {
		return Math.min(...array);
	}

	/**
	 * Reverses an array in place.
	 * @param {Array} array - The array to reverse.
	 * @returns {Array} The reversed array.
	 */
	static reverse(array) {
		return array.reverse();
	}

	/**
	 * Checks if all elements in an array pass a test.
	 * @param {Array} array - The array to check.
	 * @param {Function} callback - The test function.
	 * @returns {boolean} Returns true if all elements pass the test, false otherwise.
	 */
	static all(array, callback) {
		return array.every(callback);
	}

	/**
	 * Checks if any element in an array passes a test.
	 * @param {Array} array - The array to check.
	 * @param {Function} callback - The test function.
	 * @returns {boolean} Returns true if any element passes the test, false otherwise.
	 */
	static any(array, callback) {
		return array.some(callback);
	}
}
