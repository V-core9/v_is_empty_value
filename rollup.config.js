import path from 'path'

// import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const pthRes = (pth) => path.resolve(__dirname, pth)

const name = 'v_is_empty_value'
const outDirName = 'dist'
const formats = ['iife', 'cjs', 'es']

const distPath = (format) => `./${outDirName}/${name}.${format}.js`

const buildConfig = {
  input: pthRes(`./src/index.js`),
  output: [
    // 3 Versions output
    ...formats.map((format) => ({
      file: distPath(format),
      name,
      format: format,
      sourcemap: true
    }))
  ],
  plugins: [
    resolve(),
    commonjs()
    // babel({
    //   exclude: 'node_modules/**'
    // })
  ]
}

export default buildConfig
