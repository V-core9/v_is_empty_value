const testFn = (runCount = 0) => {
  const checkCount = 10 ** (6 + runCount)

  const demoBool = true

  const boolPerf = {
    name: 'boolPerf',
    startTs: Date.now(),
    endTs: null,
    execTime: null
  }

  for (let i = 0; i < checkCount; i++) {
    if (demoBool === true) {
      // do nothing
    }
  }

  boolPerf.endTs = Date.now()
  boolPerf.execTime = boolPerf.endTs - boolPerf.startTs

  const demoInt = 1

  const intPerf = {
    name: 'intPerf',
    startTs: Date.now(),
    endTs: null,
    execTime: null
  }

  for (let i = 0; i < checkCount; i++) {
    if (demoInt === 1) {
      // do nothing
    }
  }

  intPerf.endTs = Date.now()
  intPerf.execTime = intPerf.endTs - intPerf.startTs

  console.log('Performance Diff: ', 100 - (intPerf.execTime / boolPerf.execTime).toFixed(2) * 100 + '% faster')

  //! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const hof_int_bool = (val) => {
    if (typeof val !== 'boolean') throw new Error('Value is not a boolean')

    let value = val ? 1 : 0

    return (val) => (!val ? value : (value = val ? 1 : 0))
  }

  const hofBoolPerf = {
    name: 'hofBoolPerf',
    startTs: Date.now(),
    endTs: null,
    execTime: null
  }

  const hofBool = hof_int_bool(true)

  for (let i = 0; i < checkCount; i++) {
    if (hofBool()) {
      // do nothing
    }
  }

  hofBoolPerf.endTs = Date.now()
  hofBoolPerf.execTime = hofBoolPerf.endTs - hofBoolPerf.startTs

  class Bool {
    constructor(val) {
      if (typeof val !== 'boolean') {
        throw new Error('Value is not a boolean')
      }
      this.value = val ? 1 : 0
    }

    valueOf() {
      return Boolean(this.value)
    }

    toString() {
      return String(this.valueOf())
    }
  }

  const classBoolPerf = {
    name: 'classBoolPerf',
    startTs: Date.now(),
    endTs: null,
    execTime: null
  }

  const tBool = new Bool(true)

  for (let i = 0; i < checkCount; i++) {
    if (tBool.value) {
      // do nothing
    }
  }

  classBoolPerf.endTs = Date.now()
  classBoolPerf.execTime = classBoolPerf.endTs - classBoolPerf.startTs

  console.table([classBoolPerf, boolPerf, intPerf, hofBoolPerf])

  if (tBool.value) {
    console.log(Boolean(tBool.value))
  }
}

for (let runCount = 0; runCount < 3; runCount++) {
  console.log(`-<[ RUN COUNT: ${runCount} | 10^${6 + runCount} checks ]>- - - - - - - - - - `)
  testFn(runCount)
}

/*
console.log('true === 1', true === 1)
console.log('true === 0', true === 0)
console.log('false === 1', false === 1)
console.log('false === 0', false === 0)
console.log('true == 1', true == 1)
console.log('true == 0', true == 0)
console.log('false == 1', false == 1)
console.log('false == 0', false == 0)
console.log('true === true', true === true)
console.log('true === false', true === false)
console.log('false === true', false === true)
console.log('false === false', false === false)
console.log('true == true', true == true)
console.log('true == false', true == false)
console.log('false == true', false == true)
console.log('false == false', false == false)
console.log('true === Boolean(1)', true === Boolean(1))
console.log('true === Boolean(0)', true === Boolean(0))
console.log('false === Boolean(1)', false === Boolean(1))
console.log('false === Boolean(0)', false === Boolean(0))
console.log('true == Boolean(1)', true == Boolean(1))
console.log('true == Boolean(0)', true == Boolean(0))
console.log('false == Boolean(1)', false == Boolean(1))
console.log('false == Boolean(0)', false == Boolean(0))
*/
