import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header/header'
import Scorecards from './components/Pages/Scorecards/index';
import Profile from './components/Pages/Profile/index';
import NewScorecard from './components/Pages/NewScorecard';

class App extends Component {
  render() {
    
    return (
      <div>
        <Router>
          <Fragment>
            <Header />

            <div className='content'>            
              <Route exact path="/new-scorecard" component={NewScorecard} />
              <Route exact path="/scorecards" component={Scorecards} />
              <Route exact path="/profile" component={Profile} />
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
