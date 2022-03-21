import * as React from 'react'
import {withRouter} from 'react-router'

const LocationDisplay = withRouter(({location}) => (
  <div data-testid="location-display">{location.pathname}</div>
))

export {LocationDisplay}