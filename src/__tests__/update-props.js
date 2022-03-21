// This is an example of how to update the props of a rendered component.
// the basic idea is to simply call `render` again and provide the same container
// that your first call created for you.

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {NumberDisplay} from '../components/update-props';

test('calling render with the same component on the same container does not remount', () => {
  const {rerender} = render(<NumberDisplay number={1} />)
  expect(screen.getByTestId('number-display')).toHaveTextContent('1')

  // re-render the same component with different props
  rerender(<NumberDisplay number={2} />)
  expect(screen.getByTestId('number-display')).toHaveTextContent('2')

  expect(screen.getByTestId('instance-id')).toHaveTextContent('1')
})
