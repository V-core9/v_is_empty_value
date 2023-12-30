import { isEmpty, notEmpty } from '../dist/v_is_empty_value.es.js'

(async () => {
  console.log(isEmpty('YEA') === false)
  console.log(notEmpty('YEA') === true)
})()
