import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './utils/serviceWorker'
import GlobalStyles from './utils/GlobalStyles'
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
