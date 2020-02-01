import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navb, Home, Contact, Footer, Gallery, Testimonial, CallToAction, About, Pricing } from './components/Index'
import './assets/main.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navb />
              <Home />
              <CallToAction />
              <Gallery />
              <Testimonial />
              <Contact />
              <Footer />
            </Route>
            <Route path="/home">
              <Navb />
              <Home />
              <CallToAction />
              <Gallery />
              <Testimonial />
              <Contact />
              <Footer />
            </Route>
            <Route path="/about">
              <Navb />
              <About/>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;