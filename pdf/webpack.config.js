module.exports = {
    entry: {
        app: ['./scripts.es6']
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    output: {
        path: './',
        filename: 'scripts.es5.js',
        publicPath: './'
    },
};
