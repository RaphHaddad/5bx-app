import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import LevelSelector from './LevelSelector';
import WorkOut from './WorkOut';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="row">
          <h1>5BX</h1>
        </div>
        <Router>
          <div>
            <Route exact={true} path="/" component={LevelSelector}/>
            <Route path="/WorkOut" component={WorkOut}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
