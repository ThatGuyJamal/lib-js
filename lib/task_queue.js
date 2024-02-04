/**
 * A queue to process tasks one at a time
 */
export class TaskQueue {
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

		if (!this.#running) {
			this.#execute();
		}
	}

	/** Executes the next task in the queue */
	#execute() {
		if (this.#queue.length === 0) {
			this.#running = false;
			return;
		}

		const task = this.#queue.shift();
		this.#running = true;

		new Promise((resolve, reject) => {
			try {
				task()
					.then(() => {
						resolve();
					})
					.catch((err) => {
						console.error('Task error:', err);
						reject(err);
					})
					.finally(() => {
						this.#execute();
					});
			} catch (error) {
				console.error('Task execution error:', error);
				reject(error);
				this.#execute();
			}
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