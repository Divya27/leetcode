
// BFS / Level order traversal

class GraphBFS {
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

  // pass the starting node
  bfs(start) {
    const visited = new Set();
    const result = [];
    const queue = [start];

    // add starting node to the visited 
    visited.add(start);

    while (queue.length) {
      // remove this from the queue and add it to the result
      const node = queue.shift();
      result.push(node);

      // check for all the node neighbors 
      this.adjList[node].forEach((neighbor) => {
        // check if it is visited
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      })
    }
    console.log(result);
    return result;
  }

}

const graphObj = new GraphBFS();
graphObj.addVertex('A');
graphObj.addVertex('B');
graphObj.addVertex('C');
graphObj.addVertex('D');
graphObj.addVertex('E');
graphObj.addEdge('A', 'B');
graphObj.addEdge('A', 'C');
graphObj.addEdge('B', 'D');
graphObj.addEdge('C', 'E');
graphObj.bfs('A');