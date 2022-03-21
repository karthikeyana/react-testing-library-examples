import * as React from 'react'
import {CSSTransition, Transition} from 'react-transition-group'

function Fade({children, ...props}) {
  return (
    <CSSTransition {...props} timeout={1000} className="fade">
      {children}
    </CSSTransition>
  )
}

function HiddenMessage({initialShow = false}) {
  const [show, setShow] = React.useState(initialShow)
  const toggle = () => setShow(s => !s)
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Fade in={show}>
        <div>Hello world</div>
      </Fade>
    </div>
  )
}

export {Fade,HiddenMessage};