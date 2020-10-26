import axios from 'axios'

export default class NodeServer {
    nodes = []
    nodeGenerator;

    constructor(nodeGenerator) {
        this.nodes = nodeGenerator.nodes
        this.nodeGenerator = nodeGenerator
    }

    run() {
        for (let node of this.nodes) {
            setInterval(() => {
                axios.put('http://127.0.0.1:8080/api/node', node).then((response) => {
                    this.nodeGenerator.generateResources()
                }).catch((err) => {
                    console.error(err)
                })
            }, 10000)
        }
    }
}