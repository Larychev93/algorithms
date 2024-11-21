interface IAdjacentList {
  [key: string]: string[]
}

class Graph {
  adjacentList: IAdjacentList;
  numberOfNodes: number;

  constructor() {
    this.adjacentList = {}
    this.numberOfNodes = 0
  }

  addVertex(node: string): void {
    this.adjacentList[node] = [];

    this.numberOfNodes++;
  }

  addEdge(firstNode:  string, secondNode: string) {
    if (!this.adjacentList[firstNode].includes(secondNode)) {
      this.adjacentList[firstNode].push(secondNode)
    }

    if (!this.adjacentList[secondNode].includes(firstNode)) {
      this.adjacentList[secondNode].push(firstNode);
    }
  }

  showConnections(): void {
    for (const [node, nodeConnections] of Object.entries(this.adjacentList)) {
      let childConnections: string[] = [];

      nodeConnections.forEach((connection => {
        childConnections.push(connection);
      }))

      console.log(`${node} ====> ${childConnections.join()}`)
    }
  }
}

const graph = new Graph();

graph.addVertex('1')
graph.addVertex('3')
graph.addVertex('0')
graph.addVertex('2')
graph.addVertex('4')
graph.addVertex('5')
graph.addVertex('6')

graph.addEdge('0', '1')
graph.addEdge('0', '2')
graph.addEdge('1', '3')
graph.addEdge('1', '2')
graph.addEdge('4', '2')
graph.addEdge('4', '3')
graph.addEdge('4', '5')
graph.addEdge('5', '6')

graph.showConnections();

