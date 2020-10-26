export default class NodeGenerator {
    nodes = []
    nodeConfig = {}

    generateNodes(nodeConfig) {
        for (let node of nodeConfig) {
            this.nodes.push({
                id: node.id,
                state: node.state,
                power: node.power,
                resources: []
            })
            this.nodeConfig[node.id] = node.resources
        }
        return this.nodes
    }

    generateResources() {
        if (!this.nodes) return;

        let updatedNodes = []
        for (let node of this.nodes) {
            node.resources = []
            let resourceDefinition = this.nodeConfig[node.id]
            for (let resource of resourceDefinition) {
                node.resources.push({
                    id: resource.id,
                    type: resource.type,
                    value: Math.floor(Math.random() * (resource.max - resource.min)) + resource.min
                })
            }
            updatedNodes.push(node)
        }
        this.nodes = updatedNodes;
    }

}