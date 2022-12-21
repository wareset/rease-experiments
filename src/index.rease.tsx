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

  ;(<App/>)
})

// debugger
