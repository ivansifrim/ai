import React, { Component } from 'react';
import './App.css';
import Main from './components/main'


class App extends Component {
  render() {
    return ( 
      <div className="App">
      	<div id="top-bar"></div>
        <Main/>
      </div>
    );
  }
}

export default App;
