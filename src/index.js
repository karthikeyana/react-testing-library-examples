import * as React from 'react'
import {render} from 'react-dom'

function App() {
  return (
    <div className='container'>
      <header className='header'></header>
      <nav className='navbar'></nav>
      <main className='main-container'>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer className='footer'></footer>
    </div>
  )
}

render(<App />, document.getElementById('root'))
