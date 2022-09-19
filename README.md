# 👨‍💻 v_is_empty_value

Simple checker for Empty/NotEmpty values. Checking Numbers, Null, NaN, Strings, Objects, Arrays...Will also detect instance of Date() object and return "not-empty" value for it.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c7b2d814ac52490cbd96320824a4cea8)](https://app.codacy.com/gh/V-core9/v_is_empty_value?utm_source=github.com&utm_medium=referral&utm_content=V-core9/v_is_empty_value&utm_campaign=Badge_Grade_Settings)
[![CodeQL](https://github.com/V-core9/v_is_empty_value/actions/workflows/codeql.yml/badge.svg)](https://github.com/V-core9/v_is_empty_value/actions/workflows/codeql.yml)
[![njsscan sarif](https://github.com/V-core9/v_is_empty_value/actions/workflows/njsscan.yml/badge.svg)](https://github.com/V-core9/v_is_empty_value/actions/workflows/njsscan.yml)

### 🔩 Install using command

    npm install v_is_empty_value

### 🎭 And save for later re-install

    npm install v_is_empty_value --save

### 🪁 How to use

    const { isEmpty, notEmpty, isEmptySync, notEmptySync } = require("v_is_empty_value");

or you can import...

    import v_is_empty_value from 'v_is_empty_value';
    const { isEmpty, notEmpty, isEmptySync, notEmptySync } = v_is_empty_value;

### ☑ Things it confirms Empty

    // Empty
    await isEmpty()  //-> TRUE
    isEmptySync()  //-> TRUE

    await notEmpty()  //-> FALSE
    notEmptySync()  //-> FALSE

    // Empty String
    await isEmpty("")  //-> TRUE
    isEmptySync("")  //-> TRUE

    await notEmpty("")  //-> FALSE
    notEmptySync("")  //-> FALSE

    // Null
    await isEmpty(null)  //-> TRUE
    isEmptySync(null)  //-> TRUE

    await notEmpty(null)  //-> FALSE
    notEmptySync(null)  //-> FALSE

    // Undefined
    await isEmpty(undefined)  //-> TRUE
    isEmptySync(undefined)  //-> TRUE

    await notEmpty(undefined)  //-> FALSE
    notEmptySync(undefined)  //-> FALSE

    // NaN
    await isEmpty(NaN)  //-> TRUE
    isEmptySync(NaN)  //-> TRUE

    await notEmpty(NaN)  //-> FALSE
    notEmptySync(NaN)  //-> FALSE

    // Object
    await isEmpty({})  //-> TRUE
    isEmptySync({})  //-> TRUE

    await notEmpty({})  //-> FALSE
    notEmptySync({})  //-> FALSE

    // Array
    await isEmpty([])  //-> TRUE
    isEmptySync([])  //-> TRUE

    await notEmpty([])  //-> FALSE
    notEmptySync([])  //-> FALSE

### ☑ Few things it confirms NOT Empty

    await isEmpty("demo_password_123456")  //-> FALSE
    await notEmpty("demo_password_123456")  //-> TRUE

    await isEmpty(new Date())  //-> FALSE
    await notEmpty(new Date())  //-> TRUE

    await isEmpty(new Error())  //-> FALSE
    await notEmpty(new Error())  //-> TRUE

    await isEmpty(new Promise((resolve, reject) => resolve(true)))  //-> FALSE
    await notEmpty(new Promise((resolve, reject) => resolve(true)))  //-> TRUE

## 🚀 Benchmarking

Performance depends on whether you're using asynchronous or synchronous version. Sync versions tend to run slower.
Currently asynchronous version achieves up to 20k checks per millisecond, while sync version does up to 8k checks per ms.
> NOTE: This version improves only performance of the code and cuts down on execution time, thus resulting in such performance uplift without changing/breaking any test cases.

## ✅ Test Results and Coverage with Jest

![v_is_empty_value Node Module Test and Coverage with Jest](coverage.png)

📑 Related links :

* [v_to_md5](https://www.npmjs.com/package/v_to_md5) ⏭ MD5 hash generator
* [v_to_sha256](https://www.npmjs.com/package/v_to_sha256) ⏭ sha256 hash generator
* [v_file_system](https://www.npmjs.com/package/v_file_system) ⏭ simple and safe fs module with sync and promises
* [v_execute](https://www.npmjs.com/package/v_execute) ⏭ Exec cli commands
* [v_scrolls](https://www.npmjs.com/package/v_scrolls) ⏭ Readme Generator
* [v_database](https://www.npmjs.com/package/v_database) ⏭ single database solution
* [v_database_cli](https://www.npmjs.com/package/v_database_cli) ⏭ v_database cli tool
