// import * as rease from 'rease'
// console.log(rease)

import { createReaseApp } from 'rease'

import App from './App.rease'

createReaseApp(App, {
  target: document.body,

  beforeCreated: () => {
    console.time('ReaseApp')
  },
  onCreated: () => {
    console.timeEnd('ReaseApp')
  }
})
