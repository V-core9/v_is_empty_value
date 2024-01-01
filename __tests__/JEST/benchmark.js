const { isEmpty, isNotEmpty, isEmptyNested, isNotEmptyNested } = require('../../dist/v_is_empty_value.cjs')

const milItems = 10 ** 6
const itemCount = 25 * milItems
const expectedBench = 20000

const getAverage = (sTs, eTs, count) => 1 / ((eTs - sTs) / count) //? Items Per Millisecond
const { log } = console

test(`Benchmarking`, () => {
  const runTest = (isName, testFn) => {
    const tsStart = Date.now()
    for (let i = 0; i < itemCount; i++) {
      testFn(i)
    }

    const avg = {}
    avg.raw = getAverage(tsStart, Date.now(), itemCount)
    avg.count = Math.trunc(avg.raw / 1000)
    avg.time = Math.trunc(Date.now() - tsStart)
    avg.done = Math.trunc(itemCount / milItems)

    log(`${isName} AVG: ${avg.count}k/ms | ${avg.count}M/s | ${avg.time}ms  [T: ${avg.done}mil.]`)

    expect(avg.raw).toBeGreaterThan(expectedBench)
  }

  runTest('isEmpty', isEmpty)
  runTest('isNotEmpty', isNotEmpty)
  runTest('isEmptyNested', isEmptyNested)
  runTest('isNotEmptyNested', isNotEmptyNested)
})
