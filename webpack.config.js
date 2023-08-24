import * as url from 'url';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default {
    mode: 'development',
    entry: {
        main: './src/js/main.js'
    },
    output: {
        filename: '[name]-[hash].js',
        path: __dirname + '/dist',
        assetModuleFilename: '[name]-[hash][ext]',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css",
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/index.html'
        }),
    ]
}
