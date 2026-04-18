# Benchmark

Performance comparison between `v_is_empty_value` and `lodash.isEmpty`.

## Setup

```bash
npm install --save-dev lodash
npm run build
```

## Run

```bash
node benchmark/index.js
```

## Test Cases

The benchmark compares 21 different value types:

- Primitives: null, undefined, empty string, "hello", 0, NaN
- Arrays: empty [], [1]
- Objects: empty {}, { a: 1 }
- Maps: empty Map, Map with entries
- Sets: empty Set, Set with values
- TypedArrays: empty Uint8Array, Uint8Array with data
- Nested: { a: { b: { c: null } } }, { a: { b: { c: 1 } } }
- Instances: Date, RegExp, Promise, Error

Each test case runs 100,000 iterations.
