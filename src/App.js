import React, {Component} from 'react';
import Logo from "./Logo";
import middle from "./test.png";
import './App.css';
import { render } from "react-dom";

export default class App extends Component {
render(){

  return (
    <div className="App">
      <header className="App-header">
      <Logo/>
        <p>
          Edit <code>src/App.js</code> and save to reload.part 2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

