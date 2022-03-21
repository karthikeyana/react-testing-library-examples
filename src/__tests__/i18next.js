import * as React from 'react'
import {
  I18nextProvider,
} from 'react-i18next'
import i18n from 'i18next'
import {render as rtlRender, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MainView } from '../components/i18next'


function render(ui, options) {
  function Wrapper({children}) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
  }
  return {
    ...rtlRender(ui, {wrapper: Wrapper, ...options}),
  }
}

test('it should test lang', () => {
  render(<MainView useSuspense={false} />)
  const heading = screen.getByRole('heading')
  const pt = screen.getByText('pt')
  const en = screen.getByText('en')

  expect(heading).toHaveTextContent('Welcome to React and react-i18next')
  userEvent.click(pt)
  expect(heading).toHaveTextContent('Bem vindo ao React e ao react-i18next')
  userEvent.click(en)
  expect(heading).toHaveTextContent('Welcome to React and react-i18next')
})
