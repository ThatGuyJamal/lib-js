export class StringUtils {
	/**
	 * Checks if a string contains a specific substring.
	 * @param {string} str - The string to check.
	 * @param {string} substr - The substring to look for.
	 * @returns {boolean} Returns true if the substring is found, false otherwise.
	 */
	static contains(str, substr) {
		return str.includes(substr);
	}

	/**
	 * Capitalizes the first letter of a string.
	 * @param {string} str - The string to capitalize.
	 * @returns {string} The capitalized string.
	 */
	static capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	/**
	 * Reverses a string.
	 * @param {string} str - The string to reverse.
	 * @returns {string} The reversed string.
	 */
	static reverse(str) {
		return str.split('').reverse().join('');
	}

	/**
	 * Truncates a string to a specified length and appends '...' if truncated.
	 * @param {string} str - The string to truncate.
	 * @param {number} length - The maximum length of the truncated string.
	 * @returns {string} The truncated string.
	 */
	static truncate(str, length) {
		if (str.length > length) {
			return str.substring(0, length) + '...';
		}
		return str;
	}

	/**
	 * Counts the occurrences of a substring in a string.
	 * @param {string} str - The string to search.
	 * @param {string} substr - The substring to count.
	 * @returns {number} The number of occurrences of the substring in the string.
	 */
	static countOccurrences(str, substr) {
		const regex = new RegExp(substr, 'g');
		return (str.match(regex) || []).length;
	}

	/**
	 * Checks if a string is empty or consists of only whitespace.
	 * @param {string} str - The string to check.
	 * @returns {boolean} Returns true if the string is empty or whitespace, false otherwise.
	 */
	static isEmptyOrWhitespace(str) {
		return str.trim().length === 0;
	}

	/**
	 * Splits a string into an array of substrings based on a delimiter.
	 * @param {string} str - The string to split.
	 * @param {string} delimiter - The delimiter to use for splitting.
	 * @returns {Array} An array of substrings.
	 */
	static splitString(str, delimiter) {
		return str.split(delimiter);
	}
}