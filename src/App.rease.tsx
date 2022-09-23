import 'rease/jsx'
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
    <section>
      <h2>Counter</h2>
      <div
        style--color={$count!! > 0 ? 'green' : $count!! < 0 ? 'red' : 'gray'}
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

function H1(
  this: TypeReaseContext
): void {
  console.log(this)
  ;(<h1>
    h1: <r-slot/>
  </h1>)
}

function H2(
  this: TypeReaseContext
): void {
  console.log(this)
  ;(<h2>
    h2: <r-slot/>
  </h2>)
}

export default function App(
  this: TypeReaseContext
): void {
  console.log('App:')
  console.log(this)

  if (document.title) {
    <Title title={document.title}/>
  }

  const $cmp = subject<any>(new Promise((res) => { setTimeout(() => { res(H2) }, 2000) }))
  setTimeout(() => {
    $cmp.$ = new Promise((res) => { setTimeout(() => { res(H1) }, 1000) })
  }, 500)

  ;(
    <r-component r-is={$cmp!!}>cccccccccc</r-component>
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
    <H1 r-is={new Promise((res) => {
      setTimeout(() => { res(H2) }, 1000)
    })}>cccccccccc</H1>
  )
  
  ;(
    <ExampleComponentWithSlot>
      <Counter r-slot="counter"/>
    </ExampleComponentWithSlot>
  )
}
