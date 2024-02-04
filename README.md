# Lib-Js

A collection of javascript helpers and utilities using pure JavaScript only.

## Installation

```bash
npm install @thatguyjamal/lib-js
```

## Usage

```js
// Instance classes
import { Cache } from '@thatguyjamal/lib-js';
import { TaskQueue } from '@thatguyjamal/lib-js';
import { LazyTaskQueue } from '@thatguyjamal/lib-js';

// Static classes
import { Validator } from '@thatguyjamal/lib-js';
import { FuncHelper } from '@thatguyjamal/lib-js';
import { MathUtils } from '@thatguyjamal/lib-js';
import { ArrayUtils } from '@thatguyjamal/lib-js';
import { ObjectUtils } from '@thatguyjamal/lib-js';
```

Most of the classes are static classes, meaning you can use them without instantiating them.

```js
import { Validator } from '@thatguyjamal/lib-js';

const isValidEmail = Validator.isEmail('starthisrepo@github.com'); // true
```

Please read the source code to learn how to use the classes, enjoy!

## Classes

| Utilities/Helpers                     | Description                                          |     |
| :------------------------------------ | :--------------------------------------------------- | :-- |
| [Cache](./lib/cache.js)                   | A `2n` cache for performant applications             |     |
| [TaskQueue](./lib/task_queue.js)          | A ordered queue for functions                        |     |
| [LazyTaskQueue](./lib/lazy_task_queue.js) | A lazy ordered queue for functions                   |     |
| [FunctionHelper](./lib/func.js)           | Function helper methods                              |     |
| [ObjectHelper](./lib/obj.js)              | Object helper methods                                |     |
| [MathUtils](./lib/math.js)                | Helper methods for math                              |     |
| [ArrayUtils](./lib/array.js)              | Helper methods for arrays                            |     |
| [StringUtils](./lib/string.js)            | Helper methods for strings                           |     |
| [Validator](./lib/validator.js)           | Helpful validators for utils, emails, passwords, etc |     |