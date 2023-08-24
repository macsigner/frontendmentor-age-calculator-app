import {merge} from 'webpack-merge';
import defaultConfig from './webpack.config.js';

export default merge(defaultConfig, {
    mode: 'production',
});
