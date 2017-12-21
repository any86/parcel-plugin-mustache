const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const generate = require('babel-generator').default
const babylon = require('babylon')

class MustacheAssets extends JSAsset {
  async load() {
    let content = await super.load()
    content = '\`' + content + '\`';
    content = babylon.parse(content);
    content = generate(content).code
    return 'module.exports = ' + content + ';';
  }

  parse() {}
  collectDependencies() {}
  pretransform() {}
  transform() {}
}

module.exports = MustacheAssets;