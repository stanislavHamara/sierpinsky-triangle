const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname),
        port: 8445,
    }
};