/* eslint-disable */
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  _C as _C7
} from 'rease';
import * as rease from 'rease'
console.log('rease:')
console.log(rease)

import { createReaseApp, onCreated } from 'rease'

import App from './App.rease'

createReaseApp(document.body, () => {
  console.time('ReaseApp')
  onCreated(() => {
    console.timeEnd('ReaseApp')
  })

  ;(  _C7(App)([])
)
})

// debugger
