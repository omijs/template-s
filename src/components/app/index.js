import { render, h } from 'omis'
import logo from './logo.svg'
import AppIntro from '../app-intro'

const App = (props, store)=>(
  <div class="app">
    <header class="app-header">
      <img
        src={logo}
        onClick={store.clickHandler}
        class="app-logo"
        alt="logo"
      />
      <h1 class="app-title">Welcome to {store.name}</h1>
    </header>
    <AppIntro /> 
  </div>
)

App.store = _=>({
  name: 'Omis',
  clickHandler () {
    this.name = 'Omis. It is very easy!'
    this.update()
  }
})

App.css = require('./_index.less')

export default App