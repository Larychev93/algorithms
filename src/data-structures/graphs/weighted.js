"use strict";
exports.__esModule = true;
exports.WeightedGraph = void 0;
var WeightedGraph = /** @class */ (function () {
    function WeightedGraph() {
        this.adjacentList = {};
        this.numberOfNodes = 0;
    }
    WeightedGraph.prototype.addVertex = function (node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    };
    WeightedGraph.prototype.addEdge = function (firstNode, secondNode, weight) {
        this.adjacentList[firstNode].push({ node: secondNode, weight: weight });
        this.adjacentList[secondNode].push({ node: firstNode, weight: weight });
    };
    WeightedGraph.prototype.showConnections = function () {
        var _loop_1 = function (node, nodeConnections) {
            var childConnections = [];
            nodeConnections.forEach((function (connection) {
                childConnections.push(connection);
            }));
            console.log(node + " ====> " + JSON.stringify(childConnections));
        };
        for (var _i = 0, _a = Object.entries(this.adjacentList); _i < _a.length; _i++) {
            var _b = _a[_i], node = _b[0], nodeConnections = _b[1];
            _loop_1(node, nodeConnections);
        }
    };
    WeightedGraph.prototype.dijkstraAlgorithm = function (start) {
        var distances = {};
        var visited = new Set();
        var nodes = Object.keys(this.adjacentList);
        console.log('NODES ', nodes);
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            distances[node] = Infinity;
        }
        distances[start] = 0;
        while (nodes.length) {
            nodes.sort(function (a, b) { return distances[a] - distances[b]; });
            var closestNode = nodes.shift();
            if (distances[closestNode] === Infinity)
                break;
            visited.add(closestNode);
            console.log('VISITED ', visited);
            console.log('this.adjacentList[closestNode]', this.adjacentList[closestNode]);
            for (var _a = 0, _b = this.adjacentList[closestNode]; _a < _b.length; _a++) {
                var neighbor = _b[_a];
                console.log('neighbor', neighbor);
                var weight = neighbor.weight, node = neighbor.node;
                if (!visited.has(node)) {
                    var newDistance = distances[closestNode] + weight;
                    // If the newly calculated distance is shorter than the previously known distance to this neighbor
                    if (newDistance < distances[node]) {
                        // Update the shortest distance to this neighbor
                        distances[node] = newDistance;
                    }
                }
            }
        }
        return {
            distances: distances,
            path: ['1']
        };
    };
    WeightedGraph.prototype.getGraphData = function () {
        var nodes = Object.keys(this.adjacentList).map(function (id) { return ({ id: id }); });
        var links = [];
        var _loop_2 = function (source, edges) {
            var _loop_3 = function (edge) {
                if (!links.some(function (link) { return (link.source === edge.node && link.target === source); })) {
                    links.push({ source: source, target: edge.node, weight: edge.weight });
                }
            };
            for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
                var edge = edges_1[_i];
                _loop_3(edge);
            }
        };
        for (var _i = 0, _a = Object.entries(this.adjacentList); _i < _a.length; _i++) {
            var _b = _a[_i], source = _b[0], edges = _b[1];
            _loop_2(source, edges);
        }
        return { nodes: nodes, links: links };
    };
    return WeightedGraph;
}());
exports.WeightedGraph = WeightedGraph;
var weightedGraph = new WeightedGraph();
weightedGraph.addVertex('0');
weightedGraph.addVertex('1');
weightedGraph.addVertex('2');
weightedGraph.addVertex('3');
weightedGraph.addVertex('4');
weightedGraph.addEdge('0', '1', 60);
weightedGraph.addEdge('0', '2', 50);
weightedGraph.addEdge('1', '3', 50);
weightedGraph.addEdge('1', '2', 50);
weightedGraph.addEdge('1', '4', 50);
weightedGraph.addEdge('2', '3', 99);
weightedGraph.addEdge('3', '4', 75);
weightedGraph.showConnections();
console.log(weightedGraph.dijkstraAlgorithm('0'));
