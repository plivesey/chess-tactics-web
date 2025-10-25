import React, { Component } from 'react'

// For some reason, we need to import Router here or nothing renders
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Home from './Home.js'
import Terms from './Terms.js'
import Privacy from './Privacy.js'
import Tactic from './Tactic'
import Chess123Home from './Chess123Home.js'
import Chess123Privacy from './Chess123Privacy.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato" />
        <Route exact path={'/'} component={Home} />

        <Route path={'/terms'} component={Terms} />
        <Route path={'/terms.html'} component={Terms} />

        <Route path={'/privacy'} component={Privacy} />
        <Route path={'/privacy.html'} component={Privacy} />

        <Route exact path={'/123chess'} component={Chess123Home} />
        <Route path={'/123chess.html'} component={Chess123Home} />

        <Route path={'/123chess/privacy'} component={Chess123Privacy} />
        <Route path={'/123chess/privacy.html'} component={Chess123Privacy} />

        <Route path={'/t/:id'} component={Tactic} />
      </div>
    )
  }
}

export default App
