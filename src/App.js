import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './Home.js'
import Terms from './Terms.js'
import Privacy from './Privacy.js'

class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato" />
        <Router>
          <div className='App'>
            <Route exact path='/' component={Home} />

            <Route path='/terms' component={Terms} />
            <Route path='/terms.html' component={Terms} />

            <Route path='/privacy' component={Privacy} />
            <Route path='/privacy.html' component={Privacy} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
