import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import DifficultySelector from './DifficultySelector';
import WorkOut from './WorkOut';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="row">
          <h1>5BX</h1>
          <p>The 5BX (Five Basic Exercises) Plan is an exercise program developed for the Royal Canadian Air Force (RCAF) by Bill Orban in the late 1950s, first published in 1961</p>
          <p>I created this app because I wanted to learn React and I actually use this workout. Source: https://github.com/RaphHaddad/5bx-app</p>
        </div>
        <Router>
          <div>
            <Route exact={true} path="/" component={DifficultySelector}/>
            <Route path="/WorkOut" component={WorkOut}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
