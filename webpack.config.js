
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
                presets: ['@babel/preset-env', '@babel/preset-react', '@emotion/babel-preset-css-prop']
            }
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
