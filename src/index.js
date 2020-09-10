import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './services/serviceWorker'
import GlobalStyles from './services/GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
