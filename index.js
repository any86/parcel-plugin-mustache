module.exports = function (bundler) {
    bundler.addAssetType('mustache', require.resolve('./MustacheAsset'))
};