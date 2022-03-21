import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {LocationDisplay} from '../components/mock.react-router'

jest.mock('react-router', () => ({
  withRouter: Comp => props => <Comp {...props} />,
}))

test('displays location', () => {
  const pathname = '/some-route'
  render(<LocationDisplay location={{pathname}} />)
  expect(screen.getByTestId('location-display')).toHaveTextContent(pathname)
})
