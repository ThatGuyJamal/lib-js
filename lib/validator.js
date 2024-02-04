import crypto from 'crypto';

export class Validator {
	/**
	 * Checks if a string is a valid email address.
	 * @param {string} email - The email address to validate.
	 * @returns {boolean} Returns true if the email is valid, false otherwise.
	 */
	static isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	/**
	 * Checks if a string is a valid URL.
	 * @param {string} url - The URL to validate.
	 * @returns {boolean} Returns true if the URL is valid, false otherwise.
	 */
	static isValidURL(url) {
		try {
			new URL(url);
			return true;
		} catch (error) {
			return false;
		}
	}

	/**
	 * Checks if a value is a number.
	 * @param {*} value - The value to check.
	 * @returns {boolean} Returns true if the value is a number, false otherwise.
	 */
	static isNumber(value) {
		return typeof value === 'number' && isFinite(value);
	}

	/**
	 * Checks if a string is a valid phone number.
	 * @param {string} phoneNumber - The phone number to validate.
	 * @returns {boolean} Returns true if the phone number is valid, false otherwise.
	 */
	static isValidPhoneNumber(phoneNumber) {
		const phoneRegex = /^\d{10}$/;
		return phoneRegex.test(phoneNumber);
	}

	/**
	 * Hashes a password using SHA-256.
	 * @param {string} password - The password to hash.
	 * @returns {string} The hashed password.
	 */
	static hashPassword(password) {
		const hash = crypto.createHash('sha256');
		hash.update(password);
		return hash.digest('hex');
	}

	/**
	 * Checks if a password matches a given hash.
	 * @param {string} password - The password to check.
	 * @param {string} hash - The hash to compare against.
	 * @returns {boolean} Returns true if the password matches the hash, false otherwise.
	 */
	static checkPassword(password, hash) {
		const hashedPassword = Validator.hashPassword(password);
		return hashedPassword === hash;
	}
}
