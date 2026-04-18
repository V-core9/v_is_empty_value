/**
 * Benchmark comparing v_is_empty_value with lodash isEmpty
 *
 * Run: node benchmark/index.js
 * Prerequisites: npm install --save-dev lodash-es
 */

import { isEmpty, isEmptyNested } from "../dist/es.js"
import lodashIsEmpty from "lodash/isEmpty.js"

const cases = [
  { name: "null", value: null },
  { name: "undefined", value: undefined },
  { name: "empty string", value: "" },
  { name: "string 'hello'", value: "hello" },
  { name: "number 0", value: 0 },
  { name: "NaN", value: NaN },
  { name: "empty array", value: [] },
  { name: "array [1]", value: [1] },
  { name: "empty object", value: {} },
  { name: "object { a: 1 }", value: { a: 1 } },
  { name: "empty Map", value: new Map() },
  { name: "Map with entries", value: new Map([["a", 1]]) },
  { name: "empty Set", value: new Set() },
  { name: "Set with values", value: new Set([1]) },
  { name: "empty Uint8Array", value: new Uint8Array() },
  { name: "Uint8Array with data", value: new Uint8Array([1]) },
  { name: "nested empty", value: { a: { b: { c: null } } } },
  { name: "nested non-empty", value: { a: { b: { c: 1 } } } },
  { name: "Date", value: new Date() },
  { name: "RegExp", value: /test/ },
  { name: "Promise", value: new Promise(() => {}) },
  { name: "Error", value: new Error("test") },
]

const ITERATIONS = 100000

function benchmark(name, fn, value) {
  const start = performance.now()
  for (let i = 0; i < ITERATIONS; i++) {
    fn(value)
  }
  const end = performance.now()
  return {
    name,
    time: end - start,
    perSecond: Math.round(ITERATIONS / ((end - start) / 1000))
  }
}

function runBenchmark() {
  console.log(`\n${"=".repeat(70)}`)
  console.log(`Benchmark: v_is_empty_value vs lodash.isEmpty`)
  console.log(`Iterations per test case: ${ITERATIONS.toLocaleString()}`)
  console.log(`${"=".repeat(70)}\n`)

  console.log(`${"Test Case".padEnd(25)} ${"v_is_empty".padStart(12)} ${"lodash".padStart(12)} ${"faster".padStart(10)}`)
  console.log("-".repeat(70))

  let vTotal = 0
  let lodashTotal = 0

  for (const { name, value } of cases) {
    const vResult = benchmark("v_is_empty", isEmpty, value)
    const lodashResult = benchmark("lodash", lodashIsEmpty, value)

    vTotal += vResult.time
    lodashTotal += lodashResult.time

    const faster = vResult.time < lodashResult.time ? "v_is_empty" : "lodash"
    const ratio = Math.max(vResult.time, lodashResult.time) / Math.min(vResult.time, lodashResult.time)

    console.log(
      `${name.padEnd(25)} ` +
      `${(vResult.time.toFixed(2) + "ms").padStart(12)} ` +
      `${(lodashResult.time.toFixed(2) + "ms").padStart(12)} ` +
      `${(faster + " " + ratio.toFixed(1) + "x").padStart(10)}`
    )
  }

  console.log("-".repeat(70))
  const totalFaster = vTotal < lodashTotal ? "v_is_empty_value" : "lodash"
  const totalRatio = Math.max(vTotal, lodashTotal) / Math.min(vTotal, lodashTotal)

  console.log(
    `${"TOTAL".padEnd(25)} ` +
    `${(vTotal.toFixed(2) + "ms").padStart(12)} ` +
    `${(lodashTotal.toFixed(2) + "ms").padStart(12)} ` +
    `${(totalFaster + " " + totalRatio.toFixed(1) + "x").padStart(10)}`
  )

  console.log(`\n${"=".repeat(70)}`)
  console.log(`Per-second throughput (average):`)
  console.log(`  v_is_empty_value: ${Math.round(ITERATIONS * cases.length / (vTotal / 1000)).toLocaleString()} ops/sec`)
  console.log(`  lodash:           ${Math.round(ITERATIONS * cases.length / (lodashTotal / 1000)).toLocaleString()} ops/sec`)
  console.log(`${"=".repeat(70)}\n`)
}

// Run benchmark
runBenchmark()
