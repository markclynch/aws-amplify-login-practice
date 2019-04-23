import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { withAuthenticator } from "aws-amplify-react";
import { Analytics } from "aws-amplify";

function App() {
  const recordEvent = () => {
    console.log("about to record event");
    Analytics.record({
      name: "Test Event 1",
      attributes: {
        username: "dabit3"
      }
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <button onClick={recordEvent}>Record Event</button>
    </div>
  );
}

export default withAuthenticator(App);
