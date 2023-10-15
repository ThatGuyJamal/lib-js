/**
 * A queue to process tasks later lazily
 * 
 * When adding a task, it will not be executed until the next() method is called.
 */
export class LazyTaskQueue {
	/** The waiting task to process */
	#queue;
	/** If a current task is running */
	#running;

	constructor() {
		this.#queue = [];
		this.#running = false;
	}

	/**
	 * Adds a task to the queue
	 * @param {Function} task A function to process later
	 * @throws An Error If the task is not a function
	 * @returns {void} Nothing
	 */
	add(task) {
		if (!this.#isFunction(task)) {
			throw new Error('Task must be a function');
		}

		this.#queue.push(task);
	}

	/** Executes the next task in the queue */
	next() {
		if (this.#queue.length === 0) {
			this.#running = false;
			return;
		}

		const task = this.#queue.shift();
		this.#running = true;

		new Promise((resolve, reject) => {
			task()
				.then(() => {
					resolve();
				})
				.catch((err) => {
					console.error('Task error:', err);
					reject(err);
				})
				.finally(() => {
					this.#running = false;
				});
		});
	}

	/**
	 * Checks if the value passed is a function
	 * @param {Function} fn
	 * @returns {Boolean} True if the value is a function, false otherwise
	 */
	#isFunction(fn) {
		return typeof fn === 'function';
	}
}
