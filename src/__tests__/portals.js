import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '../components/portals';

test('modal shows the children and a close button', () => {
  // Arrange
  const handleClose = jest.fn()

  // Act
  render(
    <Modal onClose={handleClose}>
      <div>test</div>
    </Modal>,
  )
  // Assert
  expect(screen.getByText('test')).toBeTruthy()

  // Act
  userEvent.click(screen.getByText(/close/i))

  // Assert
  expect(handleClose).toHaveBeenCalledTimes(1)
})
