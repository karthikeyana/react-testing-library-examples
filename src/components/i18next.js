import * as React from 'react'
import {
  initReactI18next,
  Trans,
  withTranslation,
} from 'react-i18next'
import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  pt: {
    translation: {
      'Welcome to React': 'Bem vindo ao React e ao react-i18next',
    },
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: resources.en,
      pt: resources.pt,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

const MainView = withTranslation()((props) => {
  return (
    <React.Fragment>
      <div className="App-header">
        <button onClick={() => props.i18n.changeLanguage('pt')}>pt</button>
        <button onClick={() => props.i18n.changeLanguage('en')}>en</button>
      </div>
      <h1>
        <Trans>Welcome to React</Trans>
      </h1>
    </React.Fragment>
  )
})

export {MainView}