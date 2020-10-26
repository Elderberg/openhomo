'use strict'

import configReader from "./modules/configReader.js";
import NodeGenerator from "./modules/nodeGenerator.js";
import nodeServer from "./modules/nodeServer.js";


const nodeConfig = new configReader().read()

const nodeGenerator = new NodeGenerator()

nodeGenerator.generateNodes(nodeConfig)
nodeGenerator.generateResources();

new nodeServer(nodeGenerator).run()
