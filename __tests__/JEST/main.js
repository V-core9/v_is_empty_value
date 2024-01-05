const { isEmpty, isNotEmpty } = require('../../dist/v_is_empty_value.cjs')
const testItems = require('../data/')

testItems.forEach((item) => {
  if (typeof item.expect === 'undefined') return true

  test(`🆔 ${item.uid} | ${String(item.input)} :: [isEmpty|isNotEmpty] >> ${item.expect}`, async () => {
    expect(isEmpty(item.input)).toBe(item.expect)
    expect(isNotEmpty(item.input)).toBe(!item.expect)
  })
})

