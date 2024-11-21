interface IAdjacentListWeighted {
  [key: string]: { node: string; weight: number; }[]
}

export class WeightedGraph {
  adjacentList: IAdjacentListWeighted;
  numberOfNodes: number;

  constructor() {
    this.adjacentList = {}
    this.numberOfNodes = 0
  }

  addVertex(node: string): void {
    this.adjacentList[node] = [];

    this.numberOfNodes++;
  }

  addEdge(firstNode:  string, secondNode: string, weight: number) {
    this.adjacentList[firstNode].push({ node: secondNode, weight });
    this.adjacentList[secondNode].push({ node: firstNode, weight });
  }

  showConnections(): void {
    for (const [node, nodeConnections] of Object.entries(this.adjacentList)) {
      let childConnections: { node: string; weight: number; }[] = [];

      nodeConnections.forEach((connection => {
        childConnections.push(connection);
      }))

      console.log(`${node} ====> ${JSON.stringify(childConnections)}`)
    }
  }

  dijkstraAlgorithm(start: string): { paths: { [key: string]: string[] }, distances: { [key: string]: number } } {
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    let visited = new Set();
    const nodes = Object.keys(this.adjacentList);

    for (let node of nodes) {
      distances[node] = Infinity;
      previous[node] = null;
    }

    distances[start] = 0;

    while (nodes.length) {
      nodes.sort((a, b) => distances[a] - distances[b]);

      let closestNode = nodes.shift() as string;

      if (distances[closestNode] === Infinity) break;

      visited.add(closestNode);

      for (const neighbor of this.adjacentList[closestNode]) {
        const { weight, node } = neighbor;

        if (!visited.has(node)) {

          let newDistance = distances[closestNode] + weight;

          // If the newly calculated distance is shorter than the previously known distance to this neighbor
          if (newDistance < distances[node]) {
            // Update the shortest distance to this neighbor
            distances[node] = newDistance;
            previous[node] = closestNode;
          }
        }
      }
    }

    const paths: { [key: string]: string[] } = {};

    for (const node of Object.keys(distances)) {
      const path = [];
      for (let at = node; at !== null; at = previous[at] as string) {
        path.push(at);
      }
      path.reverse();
      paths[node] = path.length > 1 || node === start ? path : []; // Ensure path exists
    }

    return {
      distances: distances,
      paths
    }
  }

  getGraphData() {
    const nodes = Object.keys(this.adjacentList).map(id => ({ id }));
    const links: { source: string; target: string; weight: number }[] = [];

    for (const [source, edges] of Object.entries(this.adjacentList)) {
      for (const edge of edges) {
        if (!links.some(link => (link.source === edge.node && link.target === source))) {
          links.push({ source, target: edge.node, weight: edge.weight });
        }
      }
    }

    return { nodes, links };
  }
}

const weightedGraph = new WeightedGraph();

weightedGraph.addVertex('0')
weightedGraph.addVertex('1')
weightedGraph.addVertex('2')
weightedGraph.addVertex('3')
weightedGraph.addVertex('4')

weightedGraph.addEdge('0', '1', 60)
weightedGraph.addEdge('0', '2', 50)
weightedGraph.addEdge('1', '3', 50)
weightedGraph.addEdge('1', '2', 50)
weightedGraph.addEdge('1', '4', 50)
weightedGraph.addEdge('2', '3', 99)
weightedGraph.addEdge('3', '4', 75)

weightedGraph.showConnections();

