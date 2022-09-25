const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader"]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx", ".tsx", ".ts"] },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        // contentBase
        static: {
            directory: path.join(__dirname, "public/")
        },
        port: 3000,
        // publicPath
        devMiddleware: {
            publicPath: "./public",
        },
        // hotOnly
        hot: "only",
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "build", "index.html"),
    })
    ]
};