# 👨‍💻 v_is_empty_value

Simple checker for Empty/NotEmpty values. Checking Numbers, Null, NaN, Strings, Objects, Arrays...Will also detect instance of Date() object and return "not-empty" value for it.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c7b2d814ac52490cbd96320824a4cea8)](https://app.codacy.com/gh/V-core9/v_is_empty_value?utm_source=github.com&utm_medium=referral&utm_content=V-core9/v_is_empty_value&utm_campaign=Badge_Grade_Settings)
[![CodeQL](https://github.com/V-core9/v_is_empty_value/actions/workflows/codeql.yml/badge.svg)](https://github.com/V-core9/v_is_empty_value/actions/workflows/codeql.yml)
[![njsscan sarif](https://github.com/V-core9/v_is_empty_value/actions/workflows/njsscan.yml/badge.svg)](https://github.com/V-core9/v_is_empty_value/actions/workflows/njsscan.yml)

### 🔩 Install using command &  save for later

```sh
    npm install v_is_empty_value --save
```

### 🪁 How to use

```js
    const { isEmpty, isNotEmpty, isEmptyNested, isNotEmptyNested } = require("v_is_empty_value")
```

or you can import...

```js
    import v_is_empty_value from 'v_is_empty_value'
    const { isEmpty, isNotEmpty, isEmptyNested, isNotEmptyNested } = v_is_empty_value
```

### List

```js
    // Checks if a value is empty. Returns true if the value is empty, else false.
    isEmpty(v) 

    // Checks if a value is not empty. Returns true if the value is not empty, else false.
    isNotEmpty(v)

    // Checks if a nested value is empty. Returns true if the nested value is empty, else false.
    isEmptyNested(v)

    // Checks if a nested value is not empty. Returns true if the nested value is not empty, else false.
    isNotEmptyNested(v)
```

### ☑ Things it confirms Empty

    // Empty
    isEmpty()  //-> TRUE
    isNotEmpty()  //-> FALSE

    // Empty String
    isEmpty("")  //-> TRUE
    isNotEmpty("")  //-> FALSE

    // Null
    isEmpty(null)  //-> TRUE
    isNotEmpty(null)  //-> FALSE

    // Undefined
    isEmpty(undefined)  //-> TRUE
    isNotEmpty(undefined)  //-> FALSE

    // NaN
    isEmpty(NaN)  //-> TRUE
    isNotEmpty(NaN)  //-> FALSE

    // Object
    isEmpty({})  //-> TRUE
    isNotEmpty({})  //-> FALSE

    // Array
    isEmpty([])  //-> TRUE
    isNotEmpty([])  //-> FALSE

### ☑ Few things it confirms NOT Empty

     isEmpty("demo_password_123456")  //-> FALSE
     isNotEmpty("demo_password_123456")  //-> TRUE

     isEmpty(new Date())  //-> FALSE
     isNotEmpty(new Date())  //-> TRUE

     isEmpty(new Error())  //-> FALSE
     isNotEmpty(new Error())  //-> TRUE

     isEmpty(new Promise((resolve, reject) => resolve(true)))  //-> FALSE
     isNotEmpty(new Promise((resolve, reject) => resolve(true)))  //-> TRUE

## 🚀 Benchmarking

Performance depends on whether you're using asynchronous or synchronous version. Sync versions tend to run slower.
Currently asynchronous version achieves up to 20k checks per millisecond, while sync version does up to 8k checks per ms.
> NOTE: This version improves only performance of the code and cuts down on execution time, thus resulting in such performance uplift without changing/breaking any test cases.

## ✅ Test Results and Coverage with Jest

![v_is_empty_value Node Module Test and Coverage with Jest](./!~Docs~!/coverage.png)

📑 Related links :

* [v_to_md5](https://www.npmjs.com/package/v_to_md5) ⏭ MD5 hash generator
* [v_to_sha256](https://www.npmjs.com/package/v_to_sha256) ⏭ sha256 hash generator
* [v_file_system](https://www.npmjs.com/package/v_file_system) ⏭ simple and safe fs module with sync and promises
* [v_execute](https://www.npmjs.com/package/v_execute) ⏭ Exec cli commands
* [v_scrolls](https://www.npmjs.com/package/v_scrolls) ⏭ Readme Generator
* [v_database](https://www.npmjs.com/package/v_database) ⏭ single database solution
* [v_database_cli](https://www.npmjs.com/package/v_database_cli) ⏭ v_database cli tool
