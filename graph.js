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

    // function to performs BFS 
    bfs(startingNode) 
    { 
        // create a visited array
        var keys = this.adjList.keys();
        var visited = []; 
        for (var i = 0; i < keys; i++) 
            visited[i] = false; 

        // Create an object for queue 
        var q = new Queue();

        // add the starting node to the queue 
        visited[startingNode] = true; 
        q.enqueue(startingNode); 

        // loop until queue is element 
        while (!q.isEmpty()) { 
            // get the element from the queue 
            var getQueueElement = q.dequeue(); 
            // passing the current vertex to callback funtion 
            console.log(getQueueElement); 
            // get the adjacent list for current vertex 
            var get_List = this.AdjList.get(getQueueElement); 

            // loop through the list and add the elemnet to the 
            // queue if it is not processed yet 
            for (var i in get_List) { 
                var neigh = get_List[i]; 
                if (!visited[neigh]) { 
                    visited[neigh] = true; 
                    q.enqueue(neigh); 
                } 
            } 
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
graph.bfs('A');