
module.exports = {
    entry: ["whatwg-fetch", "./src/app.jsx"],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','stage-2', 'react']
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            }, {
                loader: 'sass-loader'
            }, {
                loader: 'postcss-loader'
            }]
        },
            {
                test: /\.(png|jpg|gif|ttf|svg|mp4)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
