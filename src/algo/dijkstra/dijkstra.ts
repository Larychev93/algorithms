interface IDistance {
  [vertex: string]: number
}

interface Graph {
  [vertexStart: string]: IDistance
}


class Dijkstra {
  shortestDistanceNode(distances: IDistance, visited: any) {
    let shortest = null;

    for (let node in distances) {
      let currentIsShortest = shortest === null || distances[node] < distances[shortest];

      if (currentIsShortest && !visited.includes(node)) {
        shortest = node;
      }
    }
    return shortest;
  }

  findShortestPath(graph: Graph, startNode: string, endNode: string) {
    let distances: IDistance = {};

    distances[endNode] = Infinity;
    distances = Object.assign(distances, graph[startNode]);

    let parents: {  [vertex: string]: string | null}  = {  };

    for (let child in graph[startNode]) {
      parents[child] = startNode;
    }

    let visited: string[] = [];

    let node = this.shortestDistanceNode(distances, visited);

    while(node) {
      let distance = distances[node];
      let children = graph[node];

      for (let child in children) {
        if (String(child) === String(startNode)) {
          continue;
        } else {
          let newDistance = distance + children[child];

          if (!distances[child] || distances[child] > newDistance) {
            distances[child] = newDistance;
            parents[child] = node;
          }
        }
      }

      visited.push(node);

      node = this.shortestDistanceNode(distances, visited);
    }

    let shortestPath = [endNode];
    let parent = parents[endNode];

    while (parent) {
      shortestPath.push(parent);
      parent = parents[parent];
    }
    shortestPath.reverse();

    let results = {
      distance: distances[endNode],
      path: shortestPath,
    };

    return results;
  }
}

const algo = new Dijkstra();

const input = {
  A: {  C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6 },
  D: { },
}

console.log(algo.findShortestPath(input, 'B', 'A'))
