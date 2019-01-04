// 引入绝对地址 --> __dirname
// 引入 node function "path.join()"
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('style.css')
    console.log(env)
    return {
        entry: './src/app.js', //app.js
        output: {
            path: path.join(__dirname, 'public'), //文件所在位置的 public folder
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [CSSExtract],
        devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
        devServer: {
            contentBase: './public',
            port: 8081,
            historyApiFallback: true
        }
    }
}
// loader
