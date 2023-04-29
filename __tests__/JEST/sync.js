const { isEmptySync, notEmptySync } = require("../../dist");
const testItems = require('../data/test_items');



testItems.forEach((item) => {

  test(String(item.input) + " :: isEmptySync >> " + item.expect, () => {
    expect(isEmptySync(item.input)).toBe(item.expect);
  });

  test(String(item.input) + " :: notEmptySync >> " + !item.expect, () => {
    expect(notEmptySync(item.input)).toBe(!item.expect);
  });

});
