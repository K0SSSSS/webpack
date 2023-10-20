const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode:"production",
    entry:{
         filename: path.resolve(__dirname, "src/index.js"),
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        assetModuleFilename: "[name][ext]",
        clean: true,
    },
    performance:{
        hints: false,
        maxAssetSize: 240000,
        maxEntrypointSize: 512000,
    },
    devServer:{
        port: 8000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist"),

        },
    },
    module: {
        rules:[{
            test: /\.scss$/,
            use: ['style-loader', "css-loader", "sass-loader"],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: "asset/resource",
        },
    ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "Webpack",
            filename: "index.html",
            template: "src/index.html",
        }),
    ],
};