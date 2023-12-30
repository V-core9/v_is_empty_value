const { isEmpty, notEmpty } = require('../../dist/v_is_empty_value.cjs')

const itemCount = 1000000

test('benchmarking isEmpty', () => {
  const start = Date.now()
  for (let i = 0; i < itemCount; i++) {
    isEmpty(i)
  }
  const average = 1 / ((Date.now() - start) / itemCount)
  //console.log(average);

  expect(average).toBeGreaterThan(2000) //? Items Per Millisecond
})

test('benchmarking notEmpty', () => {
  const start = Date.now()
  for (let i = 0; i < itemCount; i++) {
    notEmpty(i)
  }
  const average = 1 / ((Date.now() - start) / itemCount)

  expect(average).toBeGreaterThan(2000) //? Items Per Millisecond
})
