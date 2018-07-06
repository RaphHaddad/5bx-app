import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import './App.css';
import LevelSelector from './LevelSelector';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="row">
          <h1>5BX</h1>
        </div>
        <p>Select your level</p>
        <LevelSelector/>
      </div>
    );
  }
}

export default App;
