import 'intl'
import * as React from 'react'
import {FormattedDate} from 'react-intl'

const FormatDateView = () => {
  return (
    <div data-testid="date-display">
      <FormattedDate
        value="2019-03-11"
        timeZone="utc"
        day="2-digit"
        month="2-digit"
        year="numeric"
      />
    </div>
  )
}

export {FormatDateView}