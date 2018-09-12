import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './Home.js'
import Terms from './Terms.js'
import Privacy from './Privacy.js'

class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato" />
        <Router>
          <div className='App'>
            <Route exact path={baseUrl + '/'} component={Home} />

            <Route path={baseUrl + '/terms'} component={Terms} />
            <Route path={baseUrl + '/terms.html'} component={Terms} />

            <Route path={baseUrl + '/privacy'} component={Privacy} />
            <Route path={baseUrl + '/privacy.html'} component={Privacy} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
