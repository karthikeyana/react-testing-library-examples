// This is an example of how to update the props of a rendered component.
// the basic idea is to simply call `render` again and provide the same container
// that your first call created for you.

import * as React from 'react'
import {useRef} from 'react'

let idCounter = 1

const NumberDisplay = ({number}) => {
  const id = useRef(idCounter++) // to ensure we don't remount a different instance

  return (
    <div>
      <span data-testid="number-display">{number}</span>
      <span data-testid="instance-id">{id.current}</span>
    </div>
  )
}

export {NumberDisplay}