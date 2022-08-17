/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  _c as _c7,
  _s as _s10,
  _e as _e8,
  _t as _t3,
  _re as _re14,
  _$ as _$1,
  _rl as _rl13,
  _ri as _ri12,
  _ul as _ul20,
  _x as _x2
} from 'rease';

import { TypeReaseContext } from 'rease'
import { subject } from 'rease'

import Title from './Title.rease'

// document.addEventListener('keydown', (e) => { console.log(e) })

function Counter(
  this: TypeReaseContext
): void {
  const $count = subject<number>(0)

  const increment_1 = (): void => { $count.$++ }
  const decrement_1 = (): void => { $count.$-- }

  const increment_10 = (): void => { $count.$ += 10 }
  const decrement_10 = (): void => { $count.$ -= 10 }

  ;(
      _e8("section")(
    _e8("h2")(
      _t3("Counter")
    ),
    _e8("div", { "style--color": /*r2.$*/_$1([$count], (_$0) => (_$0[0] > 0 ? 'green' : _$0[0] < 0 ? 'red' : 'gray')) })(
      _t3("Count: "),
      _x2(/*r1.$*/$count)
    ),
    _e8("div")(
      _e8("small")(
        _t3("The keys 'ArrowUp' and 'ArrowDown' also work."),
        _e8("br")(),
        _t3("When the button 'Shift' is pressed, the value will change by 10.")
      )
    ),
    _e8("br")(),
    _e8("div")(
      _e8("button", {}, [_ul20('click', increment_1), _ul20('ArrowUp', increment_1), _ul20('click-Shift', increment_10), _ul20('ArrowUp-Shift', increment_10)])(
        _t3("Increment (ArrowUp)")
      ),
      _e8("button", {}, [_ul20('click', decrement_1), _ul20('ArrowDown', decrement_1), _ul20('click-Shift', decrement_10), _ul20('ArrowDown-Shift', decrement_10)])(
        _t3("Decrement (ArrowDown)")
      )
    ),
    _ri12(/*r2.$*/_$1([$count], (_$0) => (_$0[0] > 0)))(() => {
      _e8("p")(
        _t3("Count greater than 0")
      );
    }),
    _rl13(/*r2.$*/_$1([$count], (_$0) => (_$0[0] < 0)))(() => {
      _e8("p")(
        _t3("Count less than 0")
      );
    }),
    _re14()(() => {
              _e8("p")(
        _t3("Count is 0")
      )

      })
  )

  )
}

function ExampleComponentWithSlot(
  this: TypeReaseContext
): void {
  if (this.slots!.some((v) => v[0] === 'counter')) {
      _e8("div")(
    _s10("counter")()
  )

  }
}

export default function App(
  this: TypeReaseContext
): void {
  console.log('App:')
  console.log(this)

  if (document.title) {
      _c7(Title, { title: document.title })([])

  }
  
  (
      _c7(ExampleComponentWithSlot)([
    ["counter", () => { _c7(Counter)([]) }]
  ])

  )
}
