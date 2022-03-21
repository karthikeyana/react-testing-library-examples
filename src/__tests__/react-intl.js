import 'intl'
import * as React from 'react'
import {render as rtlRender, screen} from '@testing-library/react'
import {IntlProvider} from 'react-intl'
import {FormatDateView} from '../components/react-intl';


function render(ui, options) {
  function Wrapper({children}) {
    return <IntlProvider locale="pt">{children}</IntlProvider>
  }
  return {
    ...rtlRender(ui, {wrapper: Wrapper, ...options}),
  }
}

// this should work, but for some reason it's not able to load the locale
// even though we have the IntlPolyfill installed
// I promise it is. Just try console.log(global.IntlPolyfill)
test('it should render FormattedDate and have a formated pt date', () => {
  render(<FormatDateView />)
  expect(screen.getByTestId('date-display')).toHaveTextContent('11/03/2019')
})
