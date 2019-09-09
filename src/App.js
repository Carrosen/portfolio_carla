import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import Contact from './Components/Contact'
import HeaderMenu from './Components/HeaderMenu'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'

class App extends Component {

  render() {
    return (
      <>
        <HeaderMenu />
          <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route exact path='/portfolio' component={Portfolio}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
          </Switch>
        <Footer />
      </>
    );
  }
}

export default App
