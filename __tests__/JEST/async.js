const { isEmpty, notEmpty } = require("../../source");
const testItems = require('../data/test_items');


testItems.forEach(async (item) => {

  test(String(item.input) + " :: isEmpty >> " + item.expect, async () => {
    expect(await isEmpty(item.input)).toBe(item.expect);
  });

  test(String(item.input) + " :: notEmpty >> " + !item.expect, async () => {
    expect(await notEmpty(item.input)).toBe(!item.expect);
  });

});
