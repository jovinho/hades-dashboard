import React, { Component } from "react";
import "./App.css";
import Graph from "./Graph";
import Nav from "./components/nav.component";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <section className="section">
          <div className="container">
            <h1 className="title">Hello World</h1>
            <p className="subtitle">
              My first website with <strong>Bulma</strong>!
            </p>
            <a className="button">Button</a>
            <Graph />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
