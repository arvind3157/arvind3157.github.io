---
title: Demystifying graph data structure
---
## Conceptual Aside
Non-linear data structures are always tricky to master. Personally,
I have been struggling to get the hold of non-linear data structures.  
I am trying to demystify graph data structure in this post.  

### What's graph?
For someone coming from mathematical background or someone involved in analysing some trend might have different notion of graph.  

To set the context right, graph in computer science means connectivity of things. Things can be computer, airports, cities, people etc.

Below is wikipedia link to read more formal definition of graph.
[Graph (abstract data type)](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)){:target="_blank"}

### Terminologies in graph

* Graph -> The abstract concept of connected things
* Vertex -> The vertext represent the thing. (Computer, airport, city, person etc)
* Edge -> Edge defines the relation between things. If one computer is connected to other computer, this can be denoted with edge

### Graph representation
There are different ways to represent graph. Below are the two most popular ways to represent graph.

1. Adjacency matrix
2. Adjacency list

We are going to master adjacency list in this article.  
For our illustration, we are going to use below graph.

![Graph](/assets/images/graph.png)

Adjacency representation of above graph will look something like below

```javascript

| Vertex    |      Edges    |
|-----------|---------------|
|    A      |    [ B, C ]   |
|    B      |    [ D ]      |
|    C      |    [ E ]      |
|    D      |    [ F ]      |
|    E      |    [ F ]      |

```
## Implementation

### Graph framework

```javascript
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    // Graph Methods

    /*
    addVertext(v);
    addEdge(s, d);
    printGraph();
    breadthFirstSearch();
    depthFirstSearch();
    */
}
```
### Add vertex to the graph
For each vertex we have to create key value pair map. Key will be the vertex itself and value can be initialzes to empty array.

```javascript
    addVertext(v) {
        this.adjList.set(v, []);
    }
```

### Add edges between the vertices
For adding edge, we need to know source and destination vertex. 

```javascript
    addEdge(source, destination) {
        this.adjList.get(source).push(destination);
    }
```

### Print graph
Get all the keys from the map. Print all the array values for each key.

```javascript
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
```

### Driver program

```javascript
    let graph = new Graph();
    let vertices = ['A', 'B', 'C', 'D', 'E', 'F']
    for(let index = 0; i < vertices.length; index++) {
        graph.addVertex(vertices[i]);
    }
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'F');
    graph.addEdge('E', 'F');
```

### Complete program

```javascript
class Graph {

    constructor() {
        this.adjList = new Map();
    }

    addVertext(v) {
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
for(let index = 0; i < vertices.length; index++) {
    graph.addVertex(vertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
graph.printGraph();
````

After running the above program, you should get below output.

```javascript
A -> B C
B -> D
C -> E
D -> F
E -> F
F -> 
```