import React from "react";
import Graph from "react-graph-vis";

const graph = {
  nodes: [
    { id: 1, label: "Node 1", color: "#e04141", group: "switches" },
    { id: 2, label: "Node 2", color: "#e09c41", group: "switches" },
    { id: 3, label: "Node 3", color: "#e0df41", group: "switches" },
    { id: 4, label: "Node 4", color: "#7be041", group: "hosts" },
    { id: 5, label: "Node 5", color: "#41e0c9", group: "hosts" }
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 }
  ]
};

const options = {
  layout: {
    hierarchical: {
      enabled: false,
      direction: "LR",
      sortMethod: "hubsize"
    }
  },
  groups: {
    switches: {
      shape: "icon",
      icon: {
        face: "FontAwesome",
        code: "\uf108",
        size: 50,
        color: "#57169a"
      }
    },
    hosts: {
      shape: "icon",
      icon: {
        face: "FontAwesome",
        code: "\uf126",
        size: 50,
        color: "#57169a"
      }
    }
  },
  edges: {
    arrows: {
      to: false
    },
    color: "#000000"
  }
};

const events = {
  select: function(event) {
    var { nodes, edges } = event;
    console.log("Selected nodes:");
    console.log(nodes);
    console.log("Selected edges:");
    console.log(edges);
  }
};

export default () => (
  <div>
    {console.log("OIOIOI")}
    <h1>React graph vis</h1>
    <p>
      <a href="https://github.com/crubier/react-graph-vis">Github</a> -{" "}
      <a href="https://www.npmjs.com/package/react-graph-vis">NPM</a>
    </p>
    <p>
      <a href="https://github.com/crubier/react-graph-vis/tree/master/example">
        Source of this page
      </a>
    </p>
    <p>A React component to display beautiful network graphs using vis.js</p>
    <p>
      Make sure to visit <a href="http://visjs.org">visjs.org</a> for more info.
    </p>
    <p>This package allows to render network graphs using vis.js.</p>
    <p>
      Rendered graphs are scrollable, zoomable, retina ready, dynamic, and
      switch layout on double click.
    </p>
    <i class="fas fa-user" />

    <Graph
      graph={graph}
      options={options}
      events={events}
      style={{ height: "640px" }}
    />
  </div>
);
