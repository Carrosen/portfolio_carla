import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'

class App extends Component {

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
        </Switch>
      </>
    );
  }
}

export default App