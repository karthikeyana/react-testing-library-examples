import * as React from 'react'

export default function UpperInput() {
  const [upper, setUpper] = React.useState('')
  const handleChange = e => setUpper(e.currentTarget.value.toUpperCase())
  return (
    <div>
      <label htmlFor="upper">Upper</label>
      <input id="upper" value={upper} onChange={handleChange} />
    </div>
  )
}

