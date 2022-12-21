import 'rease/jsx'
import css from 'rease/css'
import { TypeReaseContext } from 'rease'

import { subjectGlobal } from 'rease'

const $DEGREES = subjectGlobal<number>(0, (iam) => {
  const si = setInterval(() => { iam.set(Math.random() * 360) }, 1500)
  return () => { clearInterval(si) }
})

const style = css`
$title {
  text-align: center;
  transition: color 1s;
  color: hsl(${$DEGREES!!}, 80%, 50%)
}
`

export default function Title(
  this: TypeReaseContext,
  { title }: {
    title: string
  }
): void {
  style.on()
  ;(<h1 class={style.$title}>{title}</h1>)
}
