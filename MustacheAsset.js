const JSAsset = require('parcel-bundler/src/assets/JSAsset')
const generate = require('babel-generator').default
const babylon = require('babylon')

module.exports = class MustacheAssets extends JSAsset {
    async load() {
        let content = await super.load()
        content = '\`' + content + '\`'
        content = babylon.parse(content)
        content = generate(content).code
        content = content.replace(/^`|`;$/g, '')
        return 'module.exports = ' + JSON.stringify(content) + ';'
    }

    parse() { }
    collectDependencies() { }
    pretransform() { }
    transform() { }
}