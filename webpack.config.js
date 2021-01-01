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
    }
};
