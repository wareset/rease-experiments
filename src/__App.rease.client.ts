/* eslint-disable */
// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  _c as _c7,
  _s as _s10,
  _e as _e8,
  _$ as _$1,
  _x as _x2,
  _t as _t3,
  _re as _re14,
  _f as _f11,
  _rt as _rt17,
  _ra as _ra16,
  _ri as _ri12,
  _rl as _rl13,
  _ul as _ul20
} from 'rease';

import { TypeReaseContext } from 'rease'
import { subject, subscribe, onDestroy } from 'rease'

import Title from './Title.rease'

// document.addEventListener('keydown', (e) => { console.log(e) })

function Counter(
  this: TypeReaseContext
): void {
  const $count = subject<number>(0)
  console.log('ReaseSubject:')
  console.log($count)

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
      _e8("button", {}, [_ul20('click-strict', increment_1), _ul20('ArrowUp-prevent', increment_1), _ul20('click-Shift', increment_10), _ul20('ArrowUp-Shift-prevent', increment_10)])(
        _t3("Increment (ArrowUp)")
      ),
      _e8("button", {}, [_ul20('click-strict', decrement_1), _ul20('ArrowDown-prevent', decrement_1), _ul20('click-Shift', decrement_10), _ul20('ArrowDown-Shift-prevent', decrement_10)])(
        _t3("Decrement (ArrowDown)")
      )
    )
  )

  )

  ;(
      _e8("section")(
    _e8("h2")(
      _t3("If, else and else-if example")
    ),
    _ri12(/*r2.$*/_$1([$count], (_$0) => (_$0[0] > 0)))(() => {
      _e8("p")(
        _x2(/*r1.$*/$count),
        _t3(" greater than 0")
      );
    }),
    _rl13(/*r2.$*/_$1([$count], (_$0) => (_$0[0] < 0)))(() => {
      _e8("p")(
        _x2(/*r1.$*/$count),
        _t3(" less than 0")
      );
    }),
    _re14()(() => {
              _e8("p")(
        _t3("Count is 0")
      )

      })
  )

  )

  const $time = subject<number>(5)

  ;(
      _e8("section")(
    _e8("h2")(
      _t3("Async example")
    ),
    _ri12(/*r2.$*/_$1([$count], (_$0) => (!_$0[0])))(() => {
      _ra16(new Promise((resolve) => {
          const csi = setInterval(() => { $time.$-- }, 1000)
           
          subscribe($time, (v, _ctx, unsub) => {
            if (v <= 0) clearInterval(csi), resolve('Resolve!!!'), unsub()
          })
          
          onDestroy(() => clearInterval(csi))
        }))(() => {
        _t3("Pending: ");
        _x2(/*r1.$*/$time);
      });
      _rt17()((data) => {
                  _f11()(
          _t3(data)
        )

        });
    }),
    _re14()(() => {
      _t3("Re-counting: ");
      _x2(/*r2.$*/_$1([$time], (_$0) => ($time.$ || ($time.$ = 5), _$0[0])));
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
