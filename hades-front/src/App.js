import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/layout.component";
import Graph from "./graph/graph.component";

const Hi = () => <h1> Hello World </h1>;

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Hi} />
          <Route path="/graph" component={Graph} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
