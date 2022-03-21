import * as React from 'react'

export default function WindowSize() {
  return (
    <div>
      <label id="inner-width">Inner Width</label>
      <div aria-labelledby="inner-width">{window.innerWidth}</div>
      <label id="inner-height">Inner Height</label>
      <div aria-labelledby="inner-height">{window.innerHeight}</div>
      <label id="outer-width">Outer Width</label>
      <div aria-labelledby="outer-width">{window.outerWidth}</div>
      <label id="outer-height">Outer Height</label>
      <div aria-labelledby="outer-height">{window.outerHeight}</div>
    </div>
  )
}
