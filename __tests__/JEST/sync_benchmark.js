const { isEmptySync, notEmptySync } = require("../../dist");

const itemCount = 1000000;

test('benchmarking isEmpty',  () => {
  const start = Date.now();
  for (let i = 0; i < itemCount; i++) {
    isEmptySync(i);
  }
  const average = (1 / ((Date.now() - start) / itemCount));
  //console.log(average);

  expect(average).toBeGreaterThan(2000); //? Items Per Millisecond
});

test('benchmarking notEmpty',  () => {
  const start = Date.now();
  for (let i = 0; i < itemCount; i++) {
    notEmptySync(i);
  }
  const average = (1 / ((Date.now() - start) / itemCount));

  expect(average).toBeGreaterThan(2000); //? Items Per Millisecond
});
