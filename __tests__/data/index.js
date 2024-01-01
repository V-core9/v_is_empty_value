const nested_test_items = require('./nested_test_items')
const test_items = require('./test_items')

module.exports = [...test_items, ...nested_test_items]
