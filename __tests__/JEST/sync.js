const { isEmpty, notEmpty } = require('../../dist/v_is_empty_value.cjs')
const testItems = require('../data/test_items')

testItems.forEach((item) => {
  test(String(item.input) + ' :: isEmpty >> ' + item.expect, () => {
    expect(isEmpty(item.input)).toBe(item.expect)
  })

  test(String(item.input) + ' :: notEmpty >> ' + !item.expect, () => {
    expect(notEmpty(item.input)).toBe(!item.expect)
  })
})
