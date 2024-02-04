export class FuncHelper {
	/**
	 * Debounces a function, ensuring it is not called again until after a certain amount of time has passed.
	 * @param {Function} func - The function to be debounced.
	 * @param {number} delay - The delay in milliseconds.
	 * @returns {Function} The debounced function.
	 */
	static debounce(func, delay) {
		let timeoutId;
		return function (...args) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => func.apply(this, args), delay);
		};
	}

	/**
	 * Throttles a function, ensuring it is called at most once in a specified amount of time.
	 * @param {Function} func - The function to be throttled.
	 * @param {number} limit - The limit in milliseconds.
	 * @returns {Function} The throttled function.
	 */
	static throttle(func, limit) {
		let inThrottle;
		return function (...args) {
			if (!inThrottle) {
				func.apply(this, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	}

	/**
	 * Composes multiple functions into a single function.
	 * @param  {...Function} funcs - The functions to be composed.
	 * @returns {Function} The composed function.
	 */
	static compose(...funcs) {
		return function (x) {
			return funcs.reduceRight((acc, func) => func(acc), x);
		};
	}
}
