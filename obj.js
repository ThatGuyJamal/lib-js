export class ObjectUtils {
	/**
	 * Creates a deep copy of the provided object.
	 * @param {Object} obj - The object to be cloned.
	 * @returns {Object} The deep clone of the object.
	 */
	static deepClone(obj) {
		return JSON.parse(JSON.stringify(obj));
	}

	/**
	 * Merges two objects into a new object.
	 * @param {Object} obj1 - The first object to merge.
	 * @param {Object} obj2 - The second object to merge.
	 * @returns {Object} The merged object.
	 */
	static mergeObjects(obj1, obj2) {
		return { ...obj1, ...obj2 };
	}

	/**
	 * Checks whether a variable is an object and not an array.
	 * @param {*} item - The variable to be checked.
	 * @returns {Boolean} True if the item is an object, false otherwise.
	 */
	static isObject(item) {
		return item && typeof item === 'object' && !Array.isArray(item);
	}

	/**
	 * Allows you to access nested properties of an object using a dot-separated path.
	 * @param {Object} obj - The object to access.
	 * @param {String} path - The dot-separated path of the property.
	 * @returns {*} The value of the accessed property, or undefined if not found.
	 */
	static accessObject(obj, path) {
		const keys = path.split('.');
		let current = obj;
		for (let key of keys) {
			if (current[key] === undefined) {
				return undefined;
			}
			current = current[key];
		}
		return current;
	}
}
