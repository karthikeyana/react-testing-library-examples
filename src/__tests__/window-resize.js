import * as React from 'react'
import matchMediaPolyfill from 'mq-polyfill'
import {render, screen} from '@testing-library/react'
import WindowSize from '../components/window-resize';

beforeAll(() => {
  matchMediaPolyfill(window)
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'))
  }
})

test('shows default window size correctly', () => {
  render(<WindowSize />)

  expect(screen.getByLabelText('Inner Width')).toHaveTextContent(1024)
  expect(screen.getByLabelText('Inner Height')).toHaveTextContent(768)
  expect(screen.getByLabelText('Outer Width')).toHaveTextContent(1024)
  expect(screen.getByLabelText('Outer Height')).toHaveTextContent(768)
})

test('shows modified window size correctly', () => {
  window.resizeTo(800, 300)

  render(<WindowSize />)

  expect(screen.getByLabelText('Inner Width')).toHaveTextContent(800)
  expect(screen.getByLabelText('Inner Height')).toHaveTextContent(300)
  expect(screen.getByLabelText('Outer Width')).toHaveTextContent(800)
  expect(screen.getByLabelText('Outer Height')).toHaveTextContent(300)
})
