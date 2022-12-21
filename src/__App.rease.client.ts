/* eslint-disable */
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  _C as _C7,
  _w as _w16,
  _t as _t3,
  _x as _x2,
  _E as _E9,
  _S as _S11,
  _$ as _$1,
  _e as _e15,
  _n as _n18,
  _a as _a17,
  _i as _i13,
  _o as _o14,
  _l as _l21
} from 'rease';

import { TypeReaseContext } from 'rease'
import { subject, subscribe, onDestroy, context, destroy } from 'rease'

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

  // onCreated(async () => {
  //   console.log(11111)
  //   await timethen(1500)
  //   console.log(22222)

  //   return () => {
  //     console.log(33333)
  //   }
  // })

  ;(
      _E9("section")(
    _E9("h2")(
      _t3("Counter")
    ),
    _E9("div", { "style-color": /*r2.$*/_$1([$count], (_$0) => (_$0[0] > 0 ? 'green' : _$0[0] < 0 ? 'red' : 'gray')) })(
      _t3("Count: "),
      _x2(/*r1.$*/$count)
    ),
    _E9("div")(
      _E9("small")(
        _t3("The keys 'ArrowUp' and 'ArrowDown' also work."),
        _E9("br")(),
        _t3("When the button 'Shift' is pressed, the value will change by 10.")
      )
    ),
    _E9("br")(),
    _E9("div")(
      _E9("button", {}, [_l21('click-strict', increment_1), _l21('ArrowUp-prevent', increment_1), _l21('click-Shift', increment_10), _l21('ArrowUp-Shift-prevent', increment_10)])(
        _t3("Increment (ArrowUp)")
      ),
      _E9("button", {}, [_l21('click-strict', decrement_1), _l21('ArrowDown-prevent', decrement_1), _l21('click-Shift', decrement_10), _l21('ArrowDown-Shift-prevent', decrement_10)])(
        _t3("Decrement (ArrowDown)")
      )
    )
  )

  )

  ;(
      _E9("section")(
    _E9("h2")(
      _t3("If, else and else-if example")
    ),
    _i13(/*r2.$*/_$1([$count], (_$0) => (_$0[0] > 0)))(() => {
      _E9("p")(
        _x2(/*r1.$*/$count),
        _t3(" greater than 0")
      );
    }),
    _o14(/*r2.$*/_$1([$count], (_$0) => (_$0[0] < 0)))(() => {
      _E9("p")(
        _x2(/*r1.$*/$count),
        _t3(" less than 0")
      );
    }),
    _e15()(() => {
              _E9("p")(
        _t3("Count is 0")
      )

      })
  )

  )

  const $time = subject<number>(5)

  ;(
      _E9("section")(
    _E9("h2")(
      _t3("Async example")
    ),
    _i13(/*r2.$*/_$1([$count], (_$0) => (!_$0[0])))(() => {
      _a17(new Promise((resolve) => {
          const csi = setInterval(() => { $time.$-- }, 1000)
           
          subscribe($time, (v, _ctx, unsub) => {
            if (v <= 0) clearInterval(csi), resolve('Resolve!!!'), unsub()
          })
          
          onDestroy(() => clearInterval(csi))
        }))(() => {
        _t3("Pending: ");
        _x2(/*r1.$*/$time);
      });
      _n18()((data) => {
                  _x2(data)

        });
    }),
    _e15()(() => {
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
      _E9("div")(
    _S11("counter")()
  )

  }
}

export default function App(
  this: TypeReaseContext
): void {
  console.log('App:')
  console.log(this)
  // debugger
  ;(
      _E9("h1")(
    _x2(destroy(context()!)),
    _t3("qweqwe")
  )

  )

  // onCreated(async () => {
  //   console.log(11111)
  //   await timethen(1500)
  //   console.log(22222)

  //   return () => {
  //     console.log(33333)
  //   }
  // })

  if (document.title) {
      _C7(Title, { title: document.title })([])

  }
  
  (
      _C7(ExampleComponentWithSlot)([
    ["counter", () => { _w16(1)(() => {
      _C7(Counter)([]);
    }) }]
  ])

  )

  // ;(
  //   <svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg"
  //     r-use={([() => {
  //       console.log('r-use')
  //     }])}
  //     r-use-client={[() => {
  //       console.log('r-use-client')
  //     }]}
  //     r-use-server={([() => {
  //       console.log('r-use-server')
  //     }])}
  //   >
  //     <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
  //     <use href="#myCircle" x="10" fill="blue" />
  //     <use href="#myCircle" x="20" fill="white" stroke="red" />
  //   </svg>
  // )
}

// const aa = thenablefy((resolve) => {
//   console.log(232323)
//   resolve(121212)
// })
// console.log(aa.then(console.log))
