export class MathUtils {
	/**
	 * Rounds a number to a specified number of decimal places.
	 * @param {number} number - The number to round.
	 * @param {number} decimals - The number of decimal places.
	 * @returns {number} The rounded number.
	 */
	static roundToDecimal(number, decimals) {
		return Number(number.toFixed(decimals));
	}

	/**
	 * Generates a random integer within a specified range.
	 * @param {number} min - The minimum value of the range.
	 * @param {number} max - The maximum value of the range.
	 * @returns {number} The random integer within the range.
	 */
	static randomIntegerInRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/**
	 * Checks if a number is even.
	 * @param {number} number - The number to check.
	 * @returns {boolean} Returns true if the number is even, false otherwise.
	 */
	static isEven(number) {
		return number % 2 === 0;
	}

	/**
	 * Checks if a number is odd
	 * @param {Number} n
	 * @returns {Boolean}
	 */
	static isOdd(n) {
		return Math.abs(n % 2) === 1;
	}

	/**
	 * Checks if a number is a prime number.
	 * @param {number} number - The number to check.
	 * @returns {boolean} Returns true if the number is prime, false otherwise.
	 */
	static isPrime(number) {
		if (number <= 1) return false;
		if (number === 2) return true;
		for (let i = 2; i <= Math.sqrt(number); i++) {
			if (number % i === 0) {
				return false;
			}
		}
		return true;
	}
}
