const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env["NODE_ENV"] === "development";
const isProd = process.env["NODE_ENV"] === "production";

module.exports = {
    context: path.resolve(__dirname, "src/"),
    entry: {
        main: "./index.js",
        analytics: "./analytics.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [
            ".js"
        ],
        alias: {
            "@src": path.resolve(__dirname, "src/"),
            "@models": path.resolve(__dirname, "src/models/"),
            "@assets": path.resolve(__dirname, "src/assets/"),
            "@styles": path.resolve(__dirname, "src/styles/")
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/favicon.ico"),
                    to: path.resolve(__dirname, "dist/")
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpeg|jpg|gif|ttf)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.xml$/i,
                use: ["xml-loader"]
            },
            {
                test: /\.csv$/i,
                use: ["csv-loader"]
            }
        ]
    },
    devServer: {
        port: 4200,
        hot: isDev
    }
}