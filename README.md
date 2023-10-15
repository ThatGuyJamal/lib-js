# Lib-Js

A collection of javascript helpers and utilities.

## Installation

```bash
npm install @thatguyjamal/lib-js
```

## Classes

| Utilities/Helpers                     | Description                                          |     |
| :------------------------------------ | :--------------------------------------------------- | :-- |
| [Cache](./cache.js)                   | A `2n` cache for performant applications             |     |
| [TaskQueue](./task_queue.js)          | A ordered queue for functions                        |     |
| [LazyTaskQueue](./lazy_task_queue.js) | A lazy ordered queue for functions                   |     |
| [FunctionHelper](./func.js)           | Function helper methods                              |     |
| [ObjectHelper](./obj.js)              | Object helper methods                                |     |
| [MathUtils](./math.js)                | Helper methods for math                              |     |
| [ArrayUtils]()                        | Helper methods for arrays                            |     |
| [StringUtils]()                       | Helper methods for strings                           |     |
| [Validator]()                         | Helpful validators for utils, emails, passwords, etc |     |

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