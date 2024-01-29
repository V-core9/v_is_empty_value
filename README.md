# 👨‍💻 v_is_empty_value

Simple checker for Empty/NotEmpty values. Checking Numbers, Null, NaN, Strings, Objects, Arrays...Will also detect instance of Date() object and return "not-empty" value for it.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c7b2d814ac52490cbd96320824a4cea8)](https://app.codacy.com/gh/V-core9/v_is_empty_value?utm_source=github.com&utm_medium=referral&utm_content=V-core9/v_is_empty_value&utm_campaign=Badge_Grade_Settings)
[![CodeQL](https://github.com/V-core9/v_is_empty_value/actions/workflows/codeql.yml/badge.svg)](https://github.com/V-core9/v_is_empty_value/actions/workflows/codeql.yml)
[![njsscan sarif](https://github.com/V-core9/v_is_empty_value/actions/workflows/njsscan.yml/badge.svg)](https://github.com/V-core9/v_is_empty_value/actions/workflows/njsscan.yml)

## General Information

It provides 4 functions to check if a value is empty or not.
These are named as follows:

- `isEmpty(v)` : Checks if a value is empty. Returns true if the value is empty, else false.
- `isNotEmpty(v)` : Checks if a value is not empty. Returns true if the value is not empty, else false.
- `isEmptyNested(v)` : Checks if a nested value is empty.
  - It will check nested values in Objects and Arrays.
  - It will use recursion to check nested values.
  - Uses `isEmpty(v)` to check if a value is empty under the hood.
  - Returns true if the nested value is empty, else false.
- `isNotEmptyNested(v)` : Checks if a nested value is not empty. Returns true if the nested value is not empty, else false.
  > NOTE: This basically does the opposite of `isEmptyNested(v)`.

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

- **NaN**

```js
console.log(isEmpty(NaN)) // prints "false"
console.log(isNotEmpty(NaN)) // prints "true"
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

- **Number** _instance_.

```js
console.log(Number()) // prints "0"
console.log(isEmpty(Number())) // prints "false"
console.log(isNotEmpty(Number())) // prints "true"
```

> Note: It will return `false` for `0` and `-0` as well.

- **Nested Object** : confirms not empty even though it has empty values.

```js
const nestedEmptyObject = {
  demo: null,
  yea: undefined,
  iKnowMan: {
    wtf: null,
    moreNull: null
  }
}

// NOTE: Returns "false" just because "iKnowMan" is an object.
console.log(isEmpty(nestedEmptyObject)) // prints "false"
console.log(isNotEmpty(nestedEmptyObject)) // prints "true"

// NOTE: Better use "isEmptyNested(v)" to check nested values.
console.log(isEmptyNested(nestedEmptyObject)) // prints "true"
console.log(isNotEmptyNested(nestedEmptyObject)) // prints "false"
```

> 📜 **More Info:**  
> Check the [test cases](./__tests__/data/test_items.js) for more examples.

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
