import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './services/serviceWorker'
import GlobalStyles from './services/GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import { CookiesProvider } from 'react-cookie'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <CookiesProvider>
    <Router>
      <App />
      <Navigation />
    </Router>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
