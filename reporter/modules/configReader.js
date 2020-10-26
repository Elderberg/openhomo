import fs from 'fs';

export default function configReader() {
    this.read = (file) => { return JSON.parse(fs.readFileSync(`assets/${file}`, 'utf8')) }
}

