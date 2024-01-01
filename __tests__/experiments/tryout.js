const objDate = new Date()
const objError = new Error('123')
const objTypeError = new TypeError('123')

const objList = [
  undefined,
  null,
  NaN,
  isNaN,
  {},
  [],
  [1, 2, 3],
  '',
  '123',
  { name: '123' },
  () => {},
  { name: '123', age: 123 },
  {
    demo: () => {},
    name: '123',
    age: 123,
    mode: 'demo',
    password: '123456',
    address: {
      street: '123',
      city: '123',
      country: '123',
      postal_code: '123'
    }
  },
  {
    street: '123',
    city: '123',
    country: '123',
    postal_code: '123'
  },
  new Promise((resolve, reject) => {
    resolve('123')
  }),
  objDate,
  objError,
  { err: objTypeError.name, msg: objTypeError.message }
]

objList.map((i) => {
  try {
    console.log(typeof i, i?.constructor?.name, Object.keys(i))
  } catch (error) {
    console.log(typeof i, error.message)
  }
})

//? CONSOLE OUTPUT:
// Get Object.keys() of different types of values
//- - - - - - - - - - - -
// undefined Cannot convert undefined or null to object
// object Cannot convert undefined or null to object
// number []
// function []
// object []
// object []
// object [ '0', '1', '2' ]
// string []
// string [ '0', '1', '2' ]
// object [ 'name' ]
// function []
// object [ 'name', 'age' ]
// object [ 'demo', 'name', 'age', 'mode', 'password', 'address' ]
// object [ 'street', 'city', 'country', 'postal_code' ]
// object []
