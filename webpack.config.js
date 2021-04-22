const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './html/main.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s?[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ]
            },
            {         
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ { loader: 'file-loader', options: { name: 'fonts/[name].[ext]' } } ]
            },            
            {
                test: /\.(jpe?g|png|svg)(\?[a-z0-9=&.]+)?$/,
                use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inlineSource: '.(js)$',
            template: './html/index.html',
            filename: 'ui.html'
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new MiniCssExtractPlugin({ 
            filename: 'index.css',
            chunkFilename: 'index.[name].css',
        }),
    ],
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
	output: {
		filename: 'chat.js',
		path: __dirname + '/dist/'
    },
    //devtool: 'inline-source-map'
};