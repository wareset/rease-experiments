import 'rease/jsx'
import { TypeReaseContext } from 'rease'
import { storage } from 'rease'

import Title from './Title.rease'

// document.addEventListener('keydown', (e) => { console.log(e) })

function Counter(): void {
  const $count = storage<number>(0)

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
        <small>When the button 'Shift' is pressed, the value will change by 10</small>
      </div>
      <br/>
      <div>
        <button
          r-on-click={increment_1}
          r-on-ArrowUp={increment_1}

          r-on-click-Shift={increment_10}
          r-on-ArrowUp-Shift={increment_10}
        >Increment (ArrowUp)</button>
        <button
          r-on-click={decrement_1}
          r-on-ArrowDown={decrement_1}

          r-on-click-Shift={decrement_10}
          r-on-ArrowDown-Shift={decrement_10}
        >Decrement (ArrowDown)</button>
      </div>

      <r-if r-is={$count!! > 0}>
        <p>Count greater than 0</p>
      </r-if>
      <r-else-if r-is={$count!! < 0}>
        <p>Count less than 0</p>
      </r-else-if>
      <r-else r-children={() => {
        <p>Count is 0</p>
      }}
      />
    </section>
  )
}

function ExampleComponentWithSlot(): void {
  <div>
    <r-slot r-name="counter"/>
  </div>
}

export default function App(
  this: TypeReaseContext
): void {
  console.log(this)

  ;(
    <Title title={document.title}/>
  )
  
  ;(
    <ExampleComponentWithSlot>
      <Counter r-slot="counter"/>
    </ExampleComponentWithSlot>
  )
}
