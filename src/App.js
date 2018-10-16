import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import ReactLogo from './Components/ReactLogo';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <NavBar />
        <div>
          <ReactLogo/>
        </div>
      </div>;
  }
}

export default App;
