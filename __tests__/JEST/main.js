const { isEmpty, isNotEmpty } = require('../../dist/v_is_empty_value.cjs')
const testItems = require('../data/')

testItems.forEach((item) => {
  if (typeof item.expect === 'undefined') return true

  test(`🆔 ${item.uid} | ${String(item.input)} :: [isEmpty|isNotEmpty] >> ${item.expect}`, async () => {
    expect(await isEmpty(item.input)).toBe(item.expect)
    expect(await isNotEmpty(item.input)).toBe(!item.expect)
  })
})
