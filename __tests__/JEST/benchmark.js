const { isEmpty, isNotEmpty } = require('../../dist/v_is_empty_value.cjs')

const itemCount = 1000000
const expectedBench = 20000

const log = (iType, average) => console.log(`${iType} average: ${average}`)

const runTest = (isName, testFn) =>
  test(`benchmarking ${isName}`, () => {
    const start = Date.now()

    for (let i = 0; i < itemCount; i++) {
      testFn(i)
    }
    const average = 1 / ((Date.now() - start) / itemCount)

    log(isName, average)

    expect(average).toBeGreaterThan(expectedBench) //? Items Per Millisecond
  })

runTest('isEmpty', isEmpty)
runTest('isNotEmpty', isNotEmpty)
