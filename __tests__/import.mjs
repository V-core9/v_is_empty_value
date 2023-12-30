import { isEmpty, isNotEmpty } from '../dist/v_is_empty_value.es.js'

const importMjs = async () => {
  console.log(isEmpty('YEA') === false)
  console.log(isNotEmpty('YEA') === true)
}

importMjs()
