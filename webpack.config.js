const path     = require('path');
const uglifyjs = require('uglifyjs-webpack-plugin');
const compiler = require('vue-template-compiler');

const env = process.env.NODE_ENV;

let plugins = [];

if (env == 'production') {

    plugins.push(new uglifyjs());
    
}

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
            test: /\.vue$/,
            loader: 'vue-loader'            
            },
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: plugins
};