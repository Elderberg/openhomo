import fs from 'fs';

export default function configReader() {
    this.read = () => { return JSON.parse(fs.readFileSync('assets/nodes.json', 'utf8')) }
}

