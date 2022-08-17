import rease from 'rollup-plugin-rease'
import babel from '@rollup/plugin-babel'
import sucrase from '@rollup/plugin-sucrase'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'

const production = !process.env.ROLLUP_WATCH

function serve() {
  let server

  // eslint-disable-next-line func-style
  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
      })

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    }
  }
}

export default {
  input : 'src/index.ts',
  output: {
    sourcemap: false,
    format   : 'iife',
    name     : 'app',
    file     : 'build/bundle.js'
  },
  plugins: [
    rease({
      env       : 'client',
      debug     : true,
      extensions: ['.rease.ts', '.rease.tsx']
    }),
    resolve({
      browser   : true,
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
    }),
    sucrase({ exclude: ['node_modules/**'], transforms: ['typescript'] }),
    commonjs(),

    !production && serve(),

    !production && livereload('app'),

    production && babel({
      babelHelpers: 'bundled',
      // babelrc: false,
      presets     : [
        [
          '@babel/preset-env',
          {
            corejs     : 3,
            loose      : true,
            bugfixes   : true,
            modules    : false,
            useBuiltIns: 'entry', // 'entry', 'usage'
            targets    : '> 1%, not dead'
          }
        ]
      ]
    }),

    production && terser()
  ],
  watch: { clearScreen: false }
}
