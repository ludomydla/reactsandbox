const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const CopyPlugin = require("copy-webpack-plugin");

const styleLoader = /*process.env.NODE_ENV !== "production"*/ false
  ? "style-loader"
  : MiniCssExtractPlugin.loader;

const htmlOptions = {
  template: "src/index.ejs",
  templateParameters: {
    title: "React playground"
  }
};

module.exports = {
  entry: {
    "bundle.js": ["./src/index.js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.s?css$/,
        use: [styleLoader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".svg"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin(htmlOptions),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
      chunkFilename: "[id].css"
    }),
    // new CopyPlugin([
    //   { from: __dirname + "/src/public/**/*", to: __dirname + "/dist/" }
    // ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true
  }
};
