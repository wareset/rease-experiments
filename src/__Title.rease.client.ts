/* eslint-disable */
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  _x as _x2,
  _E as _E9,
  _s as _s22,
  _$ as _$1
} from 'rease';


import { TypeReaseContext } from 'rease'

import { subjectGlobal } from 'rease'

const $DEGREES = subjectGlobal<number>(0, (iam) => {
  const si = setInterval(() => { iam.set(Math.random() * 360) }, 1500)
  return () => { clearInterval(si) }
})

const style = {
  id: "h8m7jnvyx",
  _: (_p0, _s0) => (/*r2.$*/_$1([$DEGREES], (_$0) => ("."+_s0+0+"{"+_p0[0]+"center;"+_p0[1]+"color 1s;"+_p0[2]+"hsl("+(_$0[0])+",80%,50%)}"))),
  on() {
    _s22(
      this,
      ["title"],
      ["text-align","transition","color"]
    )
  }
}

export default function Title(
  this: TypeReaseContext,
  { title }: {
    title: string
  }
): void {
  style.on()
  ;(  _E9("h1", { class: style.$title })(
    _x2(title)
  )
)
}
