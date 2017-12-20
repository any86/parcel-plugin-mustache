const { Asset } = require('parcel-bundler')

class MustacheAssets extends Asset {
    async parse(code) {
        return await super.parse(this.contents)
    }
}

module.exports = MustacheAssets