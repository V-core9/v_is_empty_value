import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import strip from '@rollup/plugin-strip'

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) console.log('✨ Production BUILD')

const name = 'v_is_empty_value'
const formats = [
  'amd', // Asynchronous Module Definition, used with module loaders like RequireJS
  'cjs', // CommonJS, suitable for Node and Browserify/Webpack
  'es', // Keep the bundle as an ES module file, suitable for other bundlers and inclusion as a <script type=module> tag in modern browsers
  'iife', // A self-executing function, suitable for inclusion as a <script> tag. (If you want to create a bundle for your application, you probably want to use this, because it leads to smaller file sizes.)
  'umd', // Universal Module Definition, works as amd, cjs and iife all in one
  'system' // Native format of the SystemJS loader
]

const banner = `//! 📚 Package: ${name} \n//! 👨‍💻 Author: V-core9`
const footer = `//! - - - - -<[:-v-:]>- - - - - `

const buildConfig = {
  input: path.resolve(__dirname, `./src/index.js`),
  treeshake: 'smallest',
  output: [
    // 3 Versions output
    ...formats.map((format) => ({
      file: `./dist/${name}.${format}.js`,
      name,
      banner,
      footer,
      format,
      sourcemap: true,
      minifyInternalExports: true,
      sanitizeFileName: true,
      generatedCode: {
        arrowFunctions: true,
        constBindings: true,
        conciseMethodProperty: true,
        objectShorthand: true,
        parameterDestructuring: true,
        reservedNamesAsProps: true,
        stickyRegExp: true,
        templateString: true
      }
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
