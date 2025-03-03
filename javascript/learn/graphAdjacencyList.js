class Graph {
  constructor() {
    this.adjList = new Map();
  }

  // methods 
  addVertex(vertex) {
    // check for node existance
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(start, end) {
    // check if start and end node exist in the map/adjList
    if (!this.adjList.has(start)) {
      this.addVertex(start);
    }
    if (!this.adjList.has(end)) {
      this.addVertex(end);
    }

    // create an edge between given nodes, for undirected add vice versa for both
    this.adjList.get(start).push(end);
    this.adjList.get(end).push(start);
  }

  removeEdge(start, end) {
    // fetch the neighbors list for start and end node
    const startList = this.adjList.get(start);
    const endList = this.adjList.get(end);

    // remove the start node from end list and vice versa
    this.adjList.set(start, startList.filter((elem) => elem !== end));
    this.adjList.set(end, endList.filter((elem) => elem !== start));

  }

  display() {
    for (let [vertex, edges] of this.adjList.entries()) {
      console.log(`${vertex} --> ${edges.join(', ')}`);
    }
  }
}

const graphObj = new Graph();
graphObj.addEdge(0, 1);
graphObj.addEdge(1, 2);
graphObj.addEdge(3, 4);
graphObj.display();