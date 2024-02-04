/** See constructor for docs */
export class Cache {
	/** The max cache values to save in memory */
	#limit;
	/** The cache index*/
	#index;
	/** The current cache */
	#current;
	/** The previous cache */
	#previous;
	
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
	constructor(max) {
		this.#limit = max || 5;
		this.#index = 0;
		this.#current = {};
		this.#previous = {};
	}

	/**
	 * Checks if the current cache should be purged.
	 * @param {Number | String} k
	 * @param {Object} v
	 */
	#keep(k, v) {
		if (this.#index >= this.#limit) {
			this.#previous = this.#current;
			this.#purge();
			this.#index++;
		}

		this.#current[k] = v;
	}
	/**
	 * Purges the cache.
	 * @param {Boolean | undefined} isPartial If true, only the current cache will be purged.
	 */
	#purge(isPartial) {
		this.#index = 0;
		this.#current = {};
		if (!isPartial) {
			this.#previous = {};
		}
	}

	/**
	 * Checks if the key is a number or string.
	 * @param {Object} key
	 *
	 * Throws an error if the value is not a number or string.
	 */
	#isNumberOrString(key) {
		if (typeof key !== 'number' && typeof key !== 'string') {
			throw new Error('The key must be a number or string');
		}
	}

	/**
	 * Read a value from the cache.
	 * @param {Number | String} k
	 * @returns {Object} The value of the key or null if it does not exist.
	 */
	read(k) {
		this.#isNumberOrString(k);
		if (this.exists(k)) {
			return this.#current[k] || this.#previous[k];
		}
		return null;
	}

	/**
	 * Writes a value to the cache.
	 * @param {Number | String} k
	 * @param {*} v
	 */
	write(k, v) {
		this.#isNumberOrString(k);
		if (this.exists(k)) {
			this.#current[k] = v;
		} else {
			this.#keep(k, v);
		}
	}

	/**
	 * Checks if the key exists in the current or previous cache.
	 * @param {Number | String} k The key to check.
	 * @returns {Boolean} True if the key exists or false if it does not.
	 */
	exists(k) {
		this.#isNumberOrString(k);
		return this.#current[k] !== undefined || this.#previous[k] !== undefined;
	}

	/**
	 * Clears the cache.
	 */
	clear() {
		this.#purge();
	}
}
