const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(jpg|png)$/,
            type: 'asset/resource',
          },
          
          {
            test:/\.html$/,
            use: [
              'html-loader'
            ]
          },
          
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Webpack Example App',
            header: 'Webpack Example Title',
            metaDesc: 'Webpack Example Description',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ], 
    mode: 'development', 
    entry: './src/index.js',
    output: {
        //clean: true,
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }, 
    devServer: {
        static: './',
        open: true
    }
};