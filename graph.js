class Graph {

    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(source, destination) {
        this.adjList.get(source).push(destination);
    }

    printGraph() {
        let keys = this.adjList.keys();
        for (const i of keys) {
            let all_values = this.adjList.get(i);
            let path = "";
            for (const j of all_values ) {
                path = path + j + " ";
            }
            console.log(i + " -> " + path)
        }
    }
}

let graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F']
for(let index = 0; index < vertices.length; index++) {
    graph.addVertex(vertices[index]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
graph.printGraph();