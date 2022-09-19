const { isEmptySync, notEmptySync } = require("../../source");

const itemCount = 1000000;

test('benchmarking isEmptySync', () => {
  const start = Date.now();
  for (let i = 0; i < itemCount; i++) {
    isEmptySync(i);
  }
  const average = (1 / ((Date.now() - start) / itemCount));
  //console.log(average);

  expect(average).toBeGreaterThan(6000); //? Items Per Millisecond
});

test('benchmarking notEmptySync', () => {
  const start = Date.now();
  for (let i = 0; i < itemCount; i++) {
    notEmptySync(i);
  }
  const average = (1 / ((Date.now() - start) / itemCount));
  //console.log(average);

  expect(average).toBeGreaterThan(6000); //? Items Per Millisecond
});
