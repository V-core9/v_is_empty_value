const { isEmpty, isNotEmpty, isEmptyNested, isNotEmptyNested } = require('../../dist/v_is_empty_value.cjs')

const itemCount = 1000000
const expectedBench = 20000

const getAverage = (sTs, eTs, count) => 1 / ((eTs - sTs) / count) //? Items Per Millisecond

test(`Benchmarking`, () => {
  const runTest = (isName, testFn) => {
    const tsStart = Date.now()
    for (let i = 0; i < itemCount; i++) {
      testFn(i)
    }
    const average = getAverage(tsStart, Date.now(), itemCount)
    console.log(`${isName} average: ${average}`)
    expect(average).toBeGreaterThan(expectedBench)
  }

  runTest('isEmpty', isEmpty)
  runTest('isNotEmpty', isNotEmpty)
  runTest('isEmptyNested', isEmptyNested)
  runTest('isNotEmptyNested', isNotEmptyNested)
})
