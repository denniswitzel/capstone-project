import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './services/serviceWorker'
import GlobalStyles from './services/GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Router>
      <App />
      <Navigation />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
