import 'rease/jsx'
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
    <h1 class="title">{title}</h1>
  )
}
Title.css = <style jsx global>{`
.title {
  text-align: center;
  transition: color 2s;
  color: hsl(${$DEGREES!!}, 80%, 50%)
}
`}</style>
