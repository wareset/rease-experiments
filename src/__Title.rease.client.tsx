/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  _$ as _$1,
  _t as _t3,
  _e as _e8
} from 'rease';

import { TypeReaseContext } from 'rease'

import { subjectGlobal, onDestroy } from 'rease'

let needChange$DEGREES = true
const $DEGREES = subjectGlobal<number>(0)
const change$DEGREES = (): void => { $DEGREES.$ = Math.random() * 360 }

export default function Title(
  this: TypeReaseContext,
  { title }: {
    title: string
  }
): void {
  if (needChange$DEGREES) {
    needChange$DEGREES = false
    const SI = setInterval(change$DEGREES, 2500)
    onDestroy(() => { clearInterval(SI), needChange$DEGREES = true })
  }
  
  (
      _e8("h1", { class: "title" })(
    _t3(title)
  )

  )
}
Title.css =   [() => /*r2.$*/_$1([$DEGREES], (_$0) => (`
.title {
  text-align: center;
  transition: color 2s;
  color: hsl(${_$0[0]}, 80%, 50%);
}
`)), "c2m1hidom", true]

