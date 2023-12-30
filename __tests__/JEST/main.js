const { isEmpty, isNotEmpty } = require('../../dist/v_is_empty_value.cjs')
const testItems = require('../data/test_items')

testItems.forEach((item) => {
  test(String(item.input) + ' :: isEmpty >> ' + item.expect, () => {
    expect(isEmpty(item.input)).toBe(item.expect)
  })

  test(String(item.input) + ' :: isNotEmpty >> ' + !item.expect, () => {
    expect(isNotEmpty(item.input)).toBe(!item.expect)
  })
})
