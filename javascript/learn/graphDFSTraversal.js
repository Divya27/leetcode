
// DFS - using recursion or stack

class graphDFS {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex])
      this.adjList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    // add edge between mentioned vertices
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }

  dfs(start) {

    const visited = new Set();
    const result = [];

    const dfsHelper = (vertex) => {
      if (!vertex) return;

      visited.add(vertex);
      result.push(vertex);

      // for all neighbors
      this.adjList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      })
    }

    dfsHelper(start);
    console.log(result);
    return result;
  }
}

const graphObj = new graphDFS();
graphObj.addVertex('A');
graphObj.addVertex('B');
graphObj.addVertex('C');
graphObj.addVertex('D');
graphObj.addVertex('E');
graphObj.addEdge('A', 'B');
graphObj.addEdge('A', 'C');
graphObj.addEdge('B', 'D');
graphObj.addEdge('C', 'E');
graphObj.dfs('A');