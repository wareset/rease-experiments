import 'rease/jsx'
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
    <section>
      <h2>Counter</h2>
      <div
        style-color={$count!! > 0 ? 'green' : $count!! < 0 ? 'red' : 'gray'}
      >
        Count: {$count!!}
      </div>
      <div>
        <small>
          The keys 'ArrowUp' and 'ArrowDown' also work.
          <br/>
          When the button 'Shift' is pressed, the value will change by 10.
        </small>
      </div>
      <br/>
      <div>
        <button
          r-on-click-strict={increment_1}
          r-on-ArrowUp-prevent={increment_1}

          r-on-click-Shift={increment_10}
          r-on-ArrowUp-Shift-prevent={increment_10}
        >Increment (ArrowUp)</button>
        <button
          r-on-click-strict={decrement_1}
          r-on-ArrowDown-prevent={decrement_1}

          r-on-click-Shift={decrement_10}
          r-on-ArrowDown-Shift-prevent={decrement_10}
        >Decrement (ArrowDown)</button>
      </div>
    </section>
  )

  ;(
    <section>
      <h2>If, else and else-if example</h2>
      <r-if r-is={$count!! > 0}>
        <p>{$count!!} greater than 0</p>
      </r-if>
      <r-else-if r-is={$count!! < 0}>
        <p>{$count!!} less than 0</p>
      </r-else-if>
      <r-else r-children={() => {
        <p>Count is 0</p>
      }}
      />
    </section>
  )

  const $time = subject<number>(5)

  ;(
    <section>
      <h2>Async example</h2>
      <r-if r-is={!$count!!}>
        <r-await r-is={new Promise((resolve) => {
          const csi = setInterval(() => { $time.$-- }, 1000)
           
          subscribe($time, (v, _ctx, unsub) => {
            if (v <= 0) clearInterval(csi), resolve('Resolve!!!'), unsub()
          })
          
          onDestroy(() => clearInterval(csi))
        })}>
        Pending: {$time!!}
        </r-await>
        <r-then r-children={(data) => {
          <r-text r-is={data}/>
        }}
        />
      </r-if>
      <r-else>
        Re-counting: {($time.$ || ($time.$ = 5), $time!!)}
      </r-else>
    </section>
  )
}

function ExampleComponentWithSlot(
  this: TypeReaseContext
): void {
  if (this.slots!.some((v) => v[0] === 'counter')) {
    <div>
      <r-slot r-name="counter"/>
    </div>
  }
}

export default function App(
  this: TypeReaseContext
): void {
  console.log('App:')
  console.log(this)
  // debugger
  ;(
    <h1>
      {destroy(context()!)}
      qweqwe
    </h1>
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
    <Title title={document.title}/>
  }
  
  (
    <ExampleComponentWithSlot>
      <r-watch r-is={1} r-slot="counter">
        <Counter/>
      </r-watch>
    </ExampleComponentWithSlot>
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
