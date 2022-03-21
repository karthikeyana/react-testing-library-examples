import * as React from 'react'
import {CSSTransition} from 'react-transition-group'

// NOTE: True shallow rendering is not possible with React Testing Library
// This is by design: https://kcd.im/shallow
// But mocking can be useful in some situations, so this is an example of that.

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

export {HiddenMessage}