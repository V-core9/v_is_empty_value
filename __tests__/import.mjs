import v_is_empty_value from '../dist';

const { isEmpty, notEmpty, isEmptySync, notEmptySync } = v_is_empty_value;

(async () => {
  console.log(await isEmpty('YEA') === false);
  console.log(await notEmpty('YEA') === true);
  console.log(isEmptySync('YEA') === false);
  console.log(notEmptySync('YEA') === true);
})();
