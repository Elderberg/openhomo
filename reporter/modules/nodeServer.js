import axios from 'axios'

export default class NodeServer {
    nodes = []
    nodeGenerator;

    constructor(nodeGenerator) {
        this.nodes = nodeGenerator.nodes
        this.nodeGenerator = nodeGenerator
    }

    run(baseUrl, path) {
        for (let node of this.nodes) {
            setInterval(() => {
                axios.put(baseUrl + path, node).then((response) => {
                    this.nodeGenerator.generateResources()
                }).catch((err) => {
                    console.error(err)
                })
            }, 10000)
        }
    }
}