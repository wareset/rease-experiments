/* eslint-disable */
// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  _c as _c8,
  _t as _t3,
  _cd as _cd9,
  _s as _s12,
  _e as _e10,
  _$ as _$1,
  _x as _x2,
  _re as _re16,
  _rt as _rt19,
  _ra as _ra18,
  _ri as _ri14,
  _rl as _rl15,
  _ul as _ul22
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
      _e10("section")(
    _e10("h2")(
      _t3("Counter")
    ),
    _e10("div", { "style--color": /*r2.$*/_$1([$count], (_$0) => (_$0[0] > 0 ? 'green' : _$0[0] < 0 ? 'red' : 'gray')) })(
      _t3("Count: "),
      _x2(/*r1.$*/$count)
    ),
    _e10("div")(
      _e10("small")(
        _t3("The keys 'ArrowUp' and 'ArrowDown' also work."),
        _e10("br")(),
        _t3("When the button 'Shift' is pressed, the value will change by 10.")
      )
    ),
    _e10("br")(),
    _e10("div")(
      _e10("button", {}, [_ul22('click-strict', increment_1), _ul22('ArrowUp-prevent', increment_1), _ul22('click-Shift', increment_10), _ul22('ArrowUp-Shift-prevent', increment_10)])(
        _t3("Increment (ArrowUp)")
      ),
      _e10("button", {}, [_ul22('click-strict', decrement_1), _ul22('ArrowDown-prevent', decrement_1), _ul22('click-Shift', decrement_10), _ul22('ArrowDown-Shift-prevent', decrement_10)])(
        _t3("Decrement (ArrowDown)")
      )
    )
  )

  )

  ;(
      _e10("section")(
    _e10("h2")(
      _t3("If, else and else-if example")
    ),
    _ri14(/*r2.$*/_$1([$count], (_$0) => (_$0[0] > 0)))(() => {
      _e10("p")(
        _x2(/*r1.$*/$count),
        _t3(" greater than 0")
      );
    }),
    _rl15(/*r2.$*/_$1([$count], (_$0) => (_$0[0] < 0)))(() => {
      _e10("p")(
        _x2(/*r1.$*/$count),
        _t3(" less than 0")
      );
    }),
    _re16()(() => {
              _e10("p")(
        _t3("Count is 0")
      )

      })
  )

  )

  const $time = subject<number>(5)

  ;(
      _e10("section")(
    _e10("h2")(
      _t3("Async example")
    ),
    _ri14(/*r2.$*/_$1([$count], (_$0) => (!_$0[0])))(() => {
      _ra18(new Promise((resolve) => {
          const csi = setInterval(() => { $time.$-- }, 1000)
           
          subscribe($time, (v, _ctx, unsub) => {
            if (v <= 0) clearInterval(csi), resolve('Resolve!!!'), unsub()
          })
          
          onDestroy(() => clearInterval(csi))
        }))(() => {
        _t3("Pending: ");
        _x2(/*r1.$*/$time);
      });
      _rt19()((data) => {
                  _t3(data)

        });
    }),
    _re16()(() => {
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
      _e10("div")(
    _s12("counter")()
  )

  }
}

function H1(
  this: TypeReaseContext
): void {
  console.log(this)
  ;(  _e10("h1")(
    _t3("h1: "),
    _s12()()
  )
)
}

function H2(
  this: TypeReaseContext
): void {
  console.log(this)
  ;(  _e10("h2")(
    _t3("h2: "),
    _s12()()
  )
)
}

export default function App(
  this: TypeReaseContext
): void {
  console.log('App:')
  console.log(this)

  if (document.title) {
      _c8(Title, { title: document.title })([])

  }

  const $cmp = subject<any>(new Promise((res) => { setTimeout(() => { res(H2) }, 2000) }))
  setTimeout(() => {
    $cmp.$ = new Promise((res) => { setTimeout(() => { res(H1) }, 1000) })
  }, 500)

  ;(
      _cd9(null, {}, void 0, /*r1.$*/$cmp)([
    [, () => { _t3("cccccccccc") }]
  ])

  )

  // ;(
  //   <H1 r-is={H1}>cccccccccc</H1>
  // )

  // ;(
  //   <h1 r-is={$cmp}>cccccccccc</h1>
  // )

  // ;(
  //   <h1 r-is={new Promise((res) => {
  //     setTimeout(() => { res('h2') }, 1000)
  //   })}>cccccccccc</h1>
  // )
  
  ;(
      _cd9(H1, {}, void 0, new Promise((res) => {
      setTimeout(() => { res(H2) }, 1000)
    }))([
    [, () => { _t3("cccccccccc") }]
  ])

  )
  
  ;(
      _c8(ExampleComponentWithSlot)([
    ["counter", () => { _c8(Counter)([]) }]
  ])

  )
}
