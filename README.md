# 👨‍💻 v_is_empty_value

Simple checker for Empty/NotEmpty values. Checking Numbers, Null, NaN, Strings, Objects, Arrays, Maps, Sets, Symbols, Functions, BigInt, and more. Will also detect instances of Date, Promise, Error, RegExp, typed arrays, and return "not-empty" value for them.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c7b2d814ac52490cbd96320824a4cea8)](https://app.codacy.com/gh/V-core9/v_is_empty_value?utm_source=github.com&utm_medium=referral&utm_content=V-core9/v_is_empty_value&utm_campaign=Badge_Grade_Settings)
[![CodeQL](https://github.com/V-core9/v_is_empty_value/actions/workflows/codeql.yml/badge.svg)](https://github.com/V-core9/v_is_empty_value/actions/workflows/codeql.yml)
[![njsscan sarif](https://github.com/V-core9/v_is_empty_value/actions/workflows/njsscan.yml/badge.svg)](https://github.com/V-core9/v_is_empty_value/actions/workflows/njsscan.yml)

## General Information

It provides 4 core functions to check if a value is empty or not, plus a powerful configuration system.

### Core Functions

- `isEmpty(v, options?)` : Checks if a value is empty. Returns `true` if empty, `false` otherwise.
- `isNotEmpty(v, options?)` : Checks if a value is not empty. Returns `true` if not empty, `false` otherwise.
- `isEmptyNested(v, options?)` : Checks if a nested value is empty (recursively checks Objects, Arrays, Maps, Sets). Handles circular references automatically.
- `isNotEmptyNested(v, options?)` : Checks if a nested value is not empty.

### Configuration System

Customize behavior globally or per-call:

- `config.get()` - Get current configuration
- `config.set(newConfig)` - Update global configuration  
- `config.reset()` - Reset to defaults
- `createCustomChecker(config)` - Create isolated checker with custom config

### Configuration Options

| Option                   | Default   | Description                          |
| :----------------------- | :-------- | :----------------------------------- |
| `treatNaNAsEmpty`        | `true`    | Treat `NaN` as empty                 |
| `treatFunctionAsEmpty`   | `true`    | Treat functions as empty             |
| `treatSymbolAsEmpty`     | `true`    | Treat symbols as empty               |
| `treatZeroBigIntAsEmpty` | `false`   | Treat `0n` as empty                  |
| `checkCircular`          | `true`    | Enable circular reference detection  |
| `maxNestedDepth`         | `0`       | Max recursion depth (0 = unlimited)  |

### Base Example

```js
// import { isEmpty, isNotEmpty, isEmptyNested, isNotEmptyNested } from 'v_is_empty_value'
const { isEmpty, isNotEmpty, isEmptyNested, isNotEmptyNested } = require('v_is_empty_value')

isEmpty(v) // Checks if a value is empty.

isNotEmpty(v) // Checks if a value is not empty.

isEmptyNested(v) // Checks if a nested value is empty.

isNotEmptyNested(v) // Checks if a nested value is not empty.
```

### ☑ Things it confirms **Empty**

- **Undefined / Empty**

```js
console.log(isEmpty()) // prints "true"
console.log(isNotEmpty()) // prints "false"
```

- **Empty String**

```js
console.log(isEmpty('')) // prints "true"
console.log(isNotEmpty('')) // prints "false"
```

- **null**

```js
console.log(isEmpty(null)) // prints "true"
console.log(isNotEmpty(null)) // prints "false"
```

- **Undefined**

```js
console.log(isEmpty(undefined)) // prints "true"
console.log(isNotEmpty(undefined)) // prints "false"
```

- **Empty Object**

```js
console.log(isEmpty({})) // prints "true"
console.log(isNotEmpty({})) // prints "false"
```

- **Empty Array**

```js
console.log(isEmpty([])) // prints "true"
console.log(isNotEmpty([])) // prints "false"
```

### ☑ Few things it confirms **NOT Empty**

- **String** with some length/value.

```js
isEmpty('demo_password_123456') // prints "false"
isNotEmpty('demo_password_123456') // prints "true"
```

- **Date** _instance_.

```js
isEmpty(new Date()) // prints "false"
isNotEmpty(new Date()) // prints "true"
```

- **Error** _instance_.

```js
isEmpty(new Error()) // prints "false"
isNotEmpty(new Error()) // prints "true"
```

- **Promise** _instance_.

```js
isEmpty(new Promise((resolve, reject) => resolve(true))) // prints "false"
isNotEmpty(new Promise((resolve, reject) => resolve(true))) // prints "true"
```

- **RegExp** _instance_.

```js
isEmpty(/test/) // prints "false"
isEmpty(new RegExp('test')) // prints "false"
```

- **Number** (including `0` and `-0`).

```js
isEmpty(0) // prints "false"
isEmpty(-0) // prints "false"
isEmpty(42) // prints "false"
isEmpty(Number()) // prints "false" (Number() returns 0)
```

- **Boolean** (both `true` and `false`).

```js
isEmpty(true) // prints "false"
isEmpty(false) // prints "false"
```

- **BigInt** (any value including `0n` by default).

```js
isEmpty(BigInt(0)) // prints "false"
isEmpty(BigInt(1)) // prints "false"
```

- **Map/Set** with entries.

```js
isEmpty(new Map([['key', 'value']])) // prints "false"
isEmpty(new Set([1, 2, 3])) // prints "false"
```

- **Typed Arrays**.

```js
isEmpty(new Uint8Array([1, 2, 3])) // prints "false"
```

- **Nested Object** : confirms not empty even though it has empty values (surface check only).

```js
const nestedEmptyObject = {
  demo: null,
  yea: undefined,
  iKnowMan: {
    wtf: null,
    moreNull: null
  }
}

// NOTE: isEmpty() returns "false" because the object has keys.
console.log(isEmpty(nestedEmptyObject)) // prints "false"
console.log(isNotEmpty(nestedEmptyObject)) // prints "true"

// NOTE: Use "isEmptyNested(v)" to recursively check nested values.
console.log(isEmptyNested(nestedEmptyObject)) // prints "true"
console.log(isNotEmptyNested(nestedEmptyObject)) // prints "false"
```

> 📜 **More Info:**  
> Check the [test cases](./__tests__/data/test_items.js) for more examples.

---

### ⚙️ Configuration Examples

#### Global Configuration

Change behavior globally for all subsequent checks:

```js
import { isEmpty, config } from 'v_is_empty_value'

// By default, NaN is treated as empty
isEmpty(NaN) // prints "true"

// Change global config to treat NaN as non-empty
config.set({ treatNaNAsEmpty: false })
isEmpty(NaN) // prints "false"

// Reset to defaults
config.reset()
isEmpty(NaN) // prints "true" again
```

#### Per-Call Options

Override configuration for a single call:

```js
import { isEmpty } from 'v_is_empty_value'

// Global default: functions are empty
isEmpty(() => 'test') // prints "true"

// Override for this call only
isEmpty(() => 'test', { treatFunctionAsEmpty: false }) // prints "false"
```

#### Custom Checker

Create isolated checkers with different configs:

```js
import { createCustomChecker } from 'v_is_empty_value'

const strictChecker = createCustomChecker({
  treatNaNAsEmpty: false,
  treatFunctionAsEmpty: false,
  treatSymbolAsEmpty: false
})

const looseChecker = createCustomChecker({
  treatZeroBigIntAsEmpty: true
})

// Strict checker
strictChecker.isEmpty(NaN) // false
strictChecker.isEmpty(() => {}) // false

// Loose checker
looseChecker.isEmpty(BigInt(0)) // true
```

---

### 🔍 Special Types Reference

| Type                      | Empty Behavior         | Configurable             |
| :------------------------ | :--------------------- | :----------------------- |
| `undefined`               | Empty (`true`)         | No                       |
| `null`                    | Empty (`true`)         | No                       |
| `''` (empty string)       | Empty (`true`)         | No                       |
| `NaN`                     | Empty (`true`)         | `treatNaNAsEmpty`        |
| `Symbol`                  | Empty (`true`)         | `treatSymbolAsEmpty`     |
| `Function`                | Empty (`true`)         | `treatFunctionAsEmpty`   |
| `0`                       | Not empty (`false`)    | No                       |
| `BigInt(0)`               | Not empty (`false`)    | `treatZeroBigIntAsEmpty` |
| `BigInt(n)`               | Not empty (`false`)    | No                       |
| `true`/`false`            | Not empty (`false`)    | No                       |
| `Date`                    | Not empty (`false`)    | No                       |
| `Promise`                 | Not empty (`false`)    | No                       |
| `Error`                   | Not empty (`false`)    | No                       |
| `RegExp`                  | Not empty (`false`)    | No                       |
| `Map` (empty)             | Empty (`true`)         | No                       |
| `Map` (entries)           | Not empty (`false`)    | No                       |
| `Set` (empty)             | Empty (`true`)         | No                       |
| `Set` (values)            | Not empty (`false`)    | No                       |
| `WeakMap`/`WeakSet`       | Not empty (`false`)    | No                       |
| `ArrayBuffer`             | Not empty (`false`)    | No                       |
| Typed Arrays              | Not empty (`false`)    | No                       |
| `{}` (empty object)       | Empty (`true`)         | No                       |
| `[]` (empty array)        | Empty (`true`)         | No                       |

---

### 🔄 Circular Reference Handling

`isEmptyNested()` automatically handles circular references without infinite loops:

```js
import { isEmptyNested } from 'v_is_empty_value'

const obj = { a: null, b: undefined }
obj.self = obj // Circular reference

// This works without hanging!
isEmptyNested(obj) // prints "true" (all values are empty)

const obj2 = { a: 'value' }
obj2.self = obj2 // Circular reference

isEmptyNested(obj2) // prints "false" (has non-empty value)
```

---

### **🚀 Performance Benchmark**

This will basically run the functions mentioned for 25mil. times and will print the time taken for each function to complete.

### 📋 Test setup:

- AMD Ryzen 7 2700X Eight-Core Processor 3.70 GHz
- 16 GB 3000 MHz DDR4
- Patriot P300 256GB M.2 NVMe
- Windows 10 Pro 64-bit
- Node.js v20.10.0

### 📊 Current performance:

- `isEmpty(v)` : ~ **40,000** ops/ms [ **40** mil. ops/sec ]
- `isNotEmpty(v)` : ~ **32,000** ops/ms [ **32** mil. ops/sec ]
- `isEmptyNested(v)` : ~ **30,000** ops/ms [ **30** mil. ops/sec ]
- `isNotEmptyNested(v)` : ~ **31,000** ops/ms [ **31** mil. ops/sec ]

---

📑 Related links :

- [v_to_md5](https://www.npmjs.com/package/v_to_md5) ⏭ MD5 hash generator
- [v_to_sha256](https://www.npmjs.com/package/v_to_sha256) ⏭ sha256 hash generator
- [v_file_system](https://www.npmjs.com/package/v_file_system) ⏭ simple and safe fs module with sync and promises
- [v_execute](https://www.npmjs.com/package/v_execute) ⏭ Exec cli commands
- [v_scrolls](https://www.npmjs.com/package/v_scrolls) ⏭ Readme Generator
- [v_database](https://www.npmjs.com/package/v_database) ⏭ single database solution
- [v_database_cli](https://www.npmjs.com/package/v_database_cli) ⏭ v_database cli tool
