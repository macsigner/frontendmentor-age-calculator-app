import {merge} from 'webpack-merge';
import defaultConfig from './webpack.config.js';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

export default merge(defaultConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
    ]
});
