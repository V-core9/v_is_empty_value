import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import strip from '@rollup/plugin-strip'

const isProduction = process.env.NODE_ENV === 'production'

console.log('isProduction', isProduction)

const banner = `//! 📚 Package: ${name} \n//! 👨‍💻 Author: V-core9`
const footer = `//! - - - - -<[:-v-:]>- - - - - `

const pthRes = (pth) => path.resolve(__dirname, pth)

const name = 'v_is_empty_value'
const outDirName = 'dist'
const formats = ['iife', 'cjs', 'es']

const distPath = (format) => `./${outDirName}/${name}.${format}.js`

const buildConfig = {
  input: pthRes(`./src/index.js`),
  treeshake: 'smallest',
  output: [
    // 3 Versions output
    ...formats.map((format) => ({
      file: distPath(format),
      name,
      format: format,
      sourcemap: true,
      minifyInternalExports: true,
      sanitizeFileName: true,
      banner,
      footer,
      generatedCode: {
        arrowFunctions: true,
        constBindings: true,
        conciseMethodProperty: true,
        objectShorthand: true,
        parameterDestructuring: true,
        reservedNamesAsProps: true,
        stickyRegExp: true,
        templateString: true,
      },
      // experimentalMinChunkSize: 1000
    }))
  ],
  plugins: [
    resolve(),
    commonjs(),
    ...(isProduction
      ? [
          terser({
            maxWorkers: 4,
            compress: {
              // booleans_as_integers: true,
              ecma: 2015
            }
          }),
          strip({
            //labels: ['unittest'],
            debugger: true
          })
        ]
      : [])
    // babel({
    //   exclude: 'node_modules/**'
    // })
  ]
}

export default buildConfig
