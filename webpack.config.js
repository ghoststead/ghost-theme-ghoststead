module.exports = {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: require.resolve('particles.js'),
                use:
                    'exports-loader?type=commonjs&exports[]=particlesJS',
            },
        ],
    },

    /* increase limits - primarily for ghost_finder (which includes all of moment!) */
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};
